import handler, { getUserPoolUserId } from '../libs/handler-lib'
import plaid from '../libs/plaid-lib'
import dynamoDb from '../libs/dynamodb-lib'

/**
 * function to handle Plaid public_token after successful client Plaid Link event
 * exchanges public_token for access_token, and puts to user table 
 */
export const main = handler(async (event, context) => {

  // get user pool user id from event, this is our userId (primary key)
  const userPoolUserId = getUserPoolUserId(event)

  // parse request body to object
  const payload = JSON.parse(event.body)
  console.log(payload)

  let resPlaid

  try {
    resPlaid = await plaid.exchangePublicToken(payload.public_token)
  } catch (err) {
    console.log(err)
    throw new Error('Unable to exchange public token with plaid')
  }

  try {
    await dynamoDb.put({
      TableName: process.env.ITEMS_TABLE_NAME,
      Item: {
        itemId: resPlaid.item_id,
        userId: userPoolUserId,
        accessToken: resPlaid.access_token,
        createdAt: Date.now()
      }
    })
  } catch (err) {
    console.log(err)
    throw new Error('Unable to put to db')
  }

  return {
    message: 'Success'
  }

})

