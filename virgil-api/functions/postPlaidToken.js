import handler, { getUserPoolUserId } from '../libs/handler-lib'
import { log } from "../libs/debug-lib"
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

  // this flow exchanges user public token for an access token,
  // then writes itemId and accessToken to table
  plaid.exchangePublicToken(payload.public_token).then(res => {

    let itemId = res.item_id
    let accessToken = res.access_token

    dynamoDb.put({
      TableName: process.env.ITEMS_TABLE_NAME,
      Item: {
        itemId: itemId,
        userId: userPoolUserId,
        accessToken: accessToken,
        createdAt: Date.now()
      }
    }).then(res => {
      return { message: "success" }
    }).catch(err => {
      throw { message: err }
    })
  }).catch(err => {
    throw { message: err }
  })

})


// If we need entire Auth object, for now just need itemId and accesToken, webhooks handle the rest
// plaid.getAuth(accessToken).then(res => {
//   dynamoDb.put({
//     TableName: process.env.USERS_TABLE_NAME,
//     Item: {
//       userId: userPoolUserId,
//       itemId: itemId,
//       accessToken: accessToken,
//       authObj: res,
//       createdAt: Date.now()
//     }
//   }).then(res => {
//     console.log(res)
//     return { message: "success" }
//   }).catch(err => {
//     console.log('Error: dynamoDb.put')
//     throw err
//   })
// }).catch(err => {
//   console.log('Error: plaid.getAuth')
//   throw err
// })