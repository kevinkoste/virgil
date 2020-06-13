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

  // parse body if needed; required if using Lambda Proxy Integration
  let payload = {}
  if (typeof event.body === String) {
    payload = JSON.parse(event.body)
  } else {
    payload = event.body
  }

  const resPlaid = await plaid.exchangePublicToken(payload.public_token)

  await dynamoDb.put({
    TableName: process.env.ITEMS_TABLE_NAME,
    Item: {
      itemId: resPlaid.item_id,
      userId: userPoolUserId,
      accessToken: resPlaid.access_token,
      createdAt: Date.now()
    }
  })

  return {
    message: 'Success'
  }

  // // this flow exchanges user public token for an access token,
  // // then writes itemId and accessToken to table
  // plaid.exchangePublicToken(payload.public_token)
  // .then(resPlaid => 
  //   dynamoDb.put({
  //     TableName: process.env.ITEMS_TABLE_NAME,
  //     Item: {
  //       itemId: resPlaid.item_id,
  //       userId: userPoolUserId,
  //       accessToken: resPlaid.access_token,
  //       createdAt: Date.now()
  //     }
  //   })
  // )
  // .then(res => {
  //   return { message: "Plaid token submission: successfully processed" }
  // })
  // .catch(err => {
  //   throw new Error(err)
  // })

})

