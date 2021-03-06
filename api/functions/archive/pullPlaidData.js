// import handler from '../libs/handler-lib'
// import plaid from '../libs/plaid-lib'
// import dynamoDb from '../libs/dynamodb-lib'

// /**
//  * function triggered by put to user table
//  * attempts to pull data from plaid and put to account and transaction tables
//  * puts new userId to table (coming from Cognito)
//  */
// export const main = handler(async (event, context) => {

//   event.Records.forEach(record => {

//     if (!(record.eventName in ['INSERT','MODIFY'])) {
//       return  { message: "success, delete doesn't need to be handled" }
//     }

//     if (!record?.dynamodb?.NewImage?.accessToken) {
//       return  { message: "success, no access token present in new row" }
//     }

//     let accessToken = record.NewImage.accessToken

//     plaid.getAllTransactions(accessToken).then(res => {

//       res.
      

//     })    
//   })

//   // plaid.getAccounts()

//   // this flow exchanges user public token for an access token,
//   // then gets Auth object for the user, (has all data we need),
//   // then writes to tables
//   plaid.exchangePublicToken(requestBody.public_token).then(res => {

//     let accessToken = res.access_token

//     plaid.getAuth(accessToken).then(res => {
//       dynamoDb.put({
//         TableName: process.env.USERS_TABLE_NAME,
//         Item: {
//           userId: event.requestContext.identity.cognitoIdentityId,
//           accessToken: accessToken,
//           authObj: res,
//           createdAt: Date.now()
//         }
//       }).then(res => {
//         console.log(res)
//         return { message: "success" }
//       }).catch(err => {
//         console.log('Error: dynamoDb.put')
//         throw err
//       })

//     }).catch(err => {
//       console.log('Error: plaid.getAuth')
//       throw err
//     })
//   }).catch(err => {
//     console.log('Error: plaid.exchangePublicToken')
//     throw err
//   })
// })