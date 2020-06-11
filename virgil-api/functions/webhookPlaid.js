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

  // parse body if needed; required if using Lambda Proxy Integration
  let payload = {}
  if (typeof event.body === String) {
    payload = JSON.parse(event.body)
  } else {
    payload = event.body
  }

  if (payload.webhook_type !== 'TRANSACTIONS') {
    return { message: "warning: received non-TRANSACTIONS request to plaid webhook" }
  }

  UpdateTransactions(payload.item_id)
  .then(res => {
    return { message: "Plaid webhook: successfully processed" }
  })
  .catch(err => {
    throw new Error(err)
  })
  
})


// helper function to chain various promises
const UpdateTransactions = (item_id) => {

  // first get formatted date strings for Plaid request
  const endDate = moment().format('YYYY-MM-DD')
  const startDate = moment().subtract(1000, 'days').format('YYYY-MM-DD')

  return new Promise((resolve, reject) => {
    dynamoDb.get({
      TableName: process.env.ITEMS_TABLE_NAME,
      Key: { itemId: item_id },
      ProjectionExpression: "accessToken"
    })
    .then(res => 
      plaid.getAllTransactions(res.Item.accessToken, startDate, endDate)
    )
    .then(res => 
      dynamoDb.update({
        TableName: process.env.ITEMS_TABLE_NAME,
        Key: { itemId: item_id },
        UpdateExpression: "set transactions = :a",
        ExpressionAttributeValues:{
          ":a":res.transactions
        }
      })
    )
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}
