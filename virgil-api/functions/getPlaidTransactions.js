import handler, { getUserPoolUserId } from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

/**
 * function to get all transactions
 * for a user based on Cognito User Pool User ID (userId)
 */
export const main = handler(async (event, context) => {

  // get user pool user id from event, this is our userId (primary key)
  const userPoolUserId = getUserPoolUserId(event)

  const resDb = await dynamoDb.query({
    TableName: process.env.ITEMS_TABLE_NAME,
    IndexName: "userId-index",
    KeyConditionExpression: "userId = :a",
    ExpressionAttributeValues: {
        ":a": userPoolUserId
    },
    ProjectionExpression: "transactions"
  })

  if (!resDb.Items[0]) {
    throw new Error('Item not found')
  }

  return {
    message: 'Success',
    transactions: resDb.Items[0].transactions
  }
  
})