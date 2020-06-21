// Libs for handler and debugging
import handler, { getUserPoolUserId } from '../libs/handler-lib'
import debug from '../libs/debug-lib'

// Libs for other services
import pool from '../libs/pg-lib'

/**
 * function to get all transactions
 * for a user based on Cognito User Pool User ID (userId)
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

  const query = `
    SELECT * FROM transactions WHERE userId = ${userPoolUserId};
  `

  let resPg

  try {
    resPg = await client.query(query)
  } catch (err) {
    debug(err)
    throw new Error('Unable to execute pg query')
  } finally {
    client.release(true)
  }

  return {
    message: 'Success',
    transactions: resPg.rows
  }
  
})


// OLD dynamoDb version
// const resDb = await dynamoDb.query({
//   TableName: process.env.ITEMS_TABLE_NAME,
//   IndexName: "userId-index",
//   KeyConditionExpression: "userId = :a",
//   ExpressionAttributeValues: {
//       ":a": userPoolUserId
//   },
//   ProjectionExpression: "transactions"
// })

// if (!resDb.Items[0]) {
//   throw new Error('Item not found')
// }