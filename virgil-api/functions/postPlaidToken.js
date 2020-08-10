// Libs for handler and debugging
import handler, { getUserPoolUserId } from '../libs/handler-lib'
import debug from '../libs/debug-lib'

// Libs for other services
import plaid from '../libs/plaid-lib'
import pool from '../libs/pg-lib'


/**
 * function to handle Plaid public_token after successful client Plaid Link event
 * exchanges public_token for access_token, and puts to user table 
 */
export const main = handler(async (event, context) => {

  // initiate pool connection, set context prop to enable pool reuse
  context.callbackWaitsForEmptyEventLoop = false;
  const client = await pool.connect()

  // get user pool user id from event, this is our userId (primary key)
  let userPoolUserId = null
  try {
    userPoolUserId = getUserPoolUserId(event)
  } catch (err) {
    debug(err)
    throw new Error('Unable to authenticate user')
  }
  
  // parse request body to object
  const payload = JSON.parse(event.body)
  debug(payload)

  let resPlaid

  try {
    resPlaid = await plaid.exchangePublicToken(payload.public_token)
  } catch (err) {
    debug(err)
    throw new Error('Unable to exchange public token with plaid')
  }
  
  const query = `
    INSERT INTO items (itemId, accessToken, userId)
      VALUES (${resPlaid.item_id}, ${resPlaid.access_token}, ${userPoolUserId});
  `

  try {
    await client.query(query)
  } catch (err) {
    debug(err)
    throw new Error('Unable to execute pg query')
  } finally {
    client.release(true)
  }

  return {
    message: 'Success'
  }

})



// DynamoDB version of handler
// import dynamoDb from '../libs/dynamodb-lib'

/**
 * function to handle Plaid public_token after successful client Plaid Link event
 * exchanges public_token for access_token, and puts to user table
 */
// export const main = handler(async (event, context) => {

//   // get user pool user id from event, this is our userId (primary key)
//   const userPoolUserId = getUserPoolUserId(event)

//   // parse request body to object
//   const payload = JSON.parse(event.body)
//   console.log(payload)

//   let resPlaid

//   try {
//     resPlaid = await plaid.exchangePublicToken(payload.public_token)
//   } catch (err) {
//     console.log(err)
//     throw new Error('Unable to exchange public token with plaid')
//   }

//   try {
//     await dynamoDb.put({
//       TableName: process.env.ITEMS_TABLE_NAME,
//       Item: {
//         itemId: resPlaid.item_id,
//         userId: userPoolUserId,
//         accessToken: resPlaid.access_token,
//         createdAt: Date.now()
//       }
//     })
//   } catch (err) {
//     console.log(err)
//     throw new Error('Unable to put to db')
//   }

//   return {
//     message: 'Success'
//   }

// })