import handler from "../../libs/handler-lib"
import dynamoDb from "../../libs/dynamodb-lib"

/**
 * function to handle successful sign-up
 * puts new userId to table (coming from Cognito)
 */
export const main = handler(async (event, context) => {
  try {
    const result = await dynamoDb.query({
      TableName: "virgil-transactions",
      IndexName: "userId-index",
      KeyConditionExpression: "userId = :a",
      ExpressionAttributeValues: {
          ":a": event.requestContext.identity.cognitoIdentityId
      }
    })
    return result
  } catch {
    throw new Error("Unable to query transactions table")
  }
})