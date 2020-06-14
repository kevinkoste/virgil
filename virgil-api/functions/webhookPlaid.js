import handler from '../libs/handler-lib'
import plaid from '../libs/plaid-lib'
import dynamoDb from '../libs/dynamodb-lib'
import moment from 'moment'

/**
 * function to handle all Plaid webhooks
 * handles different events based on required "event" header
 * dumps new data to dynamoDb tables
 */
export const main = handler(async (event, context) => {

  // parse body 
  const payload = JSON.parse(event.body)

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
  try {
    const dbRes = await dynamoDb.get({
      TableName: process.env.ITEMS_TABLE_NAME,
      Key: { itemId: itemId },
      ProjectionExpression: "accessToken"
    })
    accessToken =  dbRes.Item.accessToken
  } catch (err) {
    console.log(err)
    throw new Error('Unable to get accessToken from db')
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
