// Libs for handler and debugging
import handler from '../libs/handler-lib'
import debug from '../libs/debug-lib'

// Libs for other services
import moment from 'moment'
import plaid from '../libs/plaid-lib'
import pool from '../libs/pg-lib'

/**
 * function to handle all Plaid webhooks
 * handles transactions events
 */
export const main = handler(async (event, context) => {

  // initiate pool connection, set context prop to enable pool reuse
  context.callbackWaitsForEmptyEventLoop = false;
  const client = await pool.connect()

  // parse plaid webhook payload
  const payload = JSON.parse(event.body)
  debug(payload)

  if (payload.webhook_type !== 'TRANSACTIONS') {
    throw new Error('warning: received non-TRANSACTIONS request to plaid webhook')
  }

  // initialize
  const itemId = payload.item_id
  const endDate = moment().format('YYYY-MM-DD')
  const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD')
  let accessToken
  let transactions

  // get the access token for the Item given in the notification
  const query =  `
    SELECT accessToken FROM items WHERE itemId = ${itemId};
  `
  try {
    const resDb = client.query(query)
    accessToken =  resDb.rows[0].accessToken
  } catch (err) {
    debug(err)
    throw new Error('Unable to get accessToken from pg')
  }

  // get all transactions for the Item using the access token
  try {
    const resPlaid = await plaid.getAllTransactions(accessToken, startDate, endDate)
    transactions = resPlaid.transactions
  } catch (err) {
    console.log(err)
    throw new Error('Unable to getAllTransactions from plaid')
  }

  // update the database with the new transactions
  try {
    await dynamoDb.update({
      TableName: process.env.ITEMS_TABLE_NAME,
      Key: { itemId: itemId },
      UpdateExpression: 'set transactions = :a',
      ExpressionAttributeValues:{
        ':a': transactions
      }
    })
  } catch (err) {
    console.log(err)
    throw new Error('Unable to update db')
  }
  
  return {
    message: 'Plaid webhook: successfully processed'
  }
  
})



// // helper function to chain various promises
// const UpdateTransactions = (item_id) => {

//   // first get formatted date strings for Plaid request
//   const endDate = moment().format('YYYY-MM-DD')
//   const startDate = moment().subtract(1000, 'days').format('YYYY-MM-DD')

//   return new Promise((resolve, reject) => {
//     dynamoDb.get({
//       TableName: process.env.ITEMS_TABLE_NAME,
//       Key: { itemId: item_id },
//       ProjectionExpression: "accessToken"
//     })
//     .then(resDb => resDb.Item.accessToken)
//     .then(accessToken => plaid.getAllTransactions(accessToken, startDate, endDate))
//     .then(resPlaid => resPlaid.transactions)
//     .then(transactions => 
//       dynamoDb.update({
//         TableName: process.env.ITEMS_TABLE_NAME,
//         Key: { itemId: item_id },
//         UpdateExpression: 'set transactions = :a',
//         ExpressionAttributeValues:{
//           ':a': transactions
//         }
//       })
//     )
//     .then(resDb => {
//       resolve(resDb)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }
