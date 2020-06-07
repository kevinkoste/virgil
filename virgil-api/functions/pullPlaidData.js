import handler from '../libs/handler-lib'
import plaid from '../libs/plaid-lib'
import dynamoDb from '../libs/dynamodb-lib'

/**
 * function triggered by put to user table
 * attempts to pull data from plaid and put to account and transaction tables
 * puts new userId to table (coming from Cognito)
 */
export const main = handler(async (event, context) => {

  // parse body if needed; required if using Lambda Proxy Integration
  let requestBody = {}
  if (typeof event.body === String) {
    requestBody = JSON.parse(event.body)
  } else {
    requestBody = event.body
  }

  plaid.getAccounts()

  // this flow exchanges user public token for an access token,
  // then gets Auth object for the user, (has all data we need),
  // then writes to tables
  plaid.exchangePublicToken(requestBody.public_token).then(res => {

    let accessToken = res.access_token

    plaid.getAuth(accessToken).then(res => {
      dynamoDb.put({
        TableName: process.env.USERS_TABLE_NAME,
        Item: {
          userId: event.requestContext.identity.cognitoIdentityId,
          accessToken: accessToken,
          authObj: res,
          createdAt: Date.now()
        }
      }).then(res => {
        console.log(res)
        return { message: "success" }
      }).catch(err => {
        console.log('Error: dynamoDb.put')
        throw err
      })

    }).catch(err => {
      console.log('Error: plaid.getAuth')
      throw err
    })
  }).catch(err => {
    console.log('Error: plaid.exchangePublicToken')
    throw err
  })
})