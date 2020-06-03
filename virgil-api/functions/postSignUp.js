import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

/**
 * function to handle successful sign-up
 * puts new userId to table (coming from Cognito)
 */
export const main = handler(async (event, context) => {
  try {
    await dynamoDb.put({
      TableName: 'virgil-users',
      Item: {
        userId: event.requestContext.identity.cognitoIdentityId,
        createdAt: Date.now()
      }
    })
    return { message: "success" }
  } catch {
    throw new Error("Unable to put to users table")
  }
})