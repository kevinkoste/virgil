// import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";


export const signUp = handler(async (event, context) => {

  dynamoDb.put({
    TableName: 'virgil-users',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      createdAt: Date.now()
    }
  }).then(() => {
    return { message: "Success" }
  }).catch(err => {
    throw new Error("Unable to put to users table")
  })

})



// WEBHOOK Fidel handlers
export const webhook = handler(async (event, context) => {

  const requestHeaders = JSON.parse(event.headers)
  const requestBody = JSON.parse(event.body)

  // console.log(event)
  // console.log(requestHeaders)
  // console.log(requestBody)

  switch (requestHeaders.event) {

    // new linked card
    case 'fidel-card-linked':
      console.log('in card link case')
      dynamoDb.put({
        TableName: 'virgil-cards',
        Item: {
          cardId: requestBody.id,
          userId: event.requestContext.identity.cognitoIdentityId,
          createdAt: Date.now(),
          fidelEvent: requestBody
        }
      }).then(() => {
        return { message: "Success" }
      }).catch(() => {
        throw new Error("Unable to put to users table")
      })

    // new transaction authorization
    case 'fidel-transaction-auth':
      dynamoDb.put({
        TableName: 'virgil-transactions',
        Item: {
          transactionId: requestBody.id,
          userId: event.requestContext.identity.cognitoIdentityId,
          cardId: requestBody.card.id,
          createdAt: Date.now(),
          fidelEvent: requestBody
        }
      }).then(() => {
        return { message: "Success" }
      }).catch(() => {
        throw new Error("Unable to put to users table")
      })

    // default:
    //   return { message: "success" }
      // throw new Error(`Invalid Fidel event, header: "event" not present`)
  };

});




// need to implement more client endpoints (i.e. get transactions) below...


// // DEPRECATED
// get transaction
// export const get = handler(async (event, context) => {
//   const params = {
//     TableName: process.env.DYNAMO_DB_TABLE_USERS,
//     // 'Key' defines the partition key and sort key of the item to be retrieved
//     // - 'userId': Identity Pool identity id of the authenticated user
//     // - 'noteId': path parameter
//     Key: {
//       userId: event.requestContext.identity.cognitoIdentityId,
//       transactionId: event.pathParameters.id
//     }
//   };

//   const result = await dynamoDb.get(params);
//   if (!result.Item) {
//     throw new Error("Item not found.");
//   }

//   // Return the retrieved item
//   return result.Item;
// });



// // IMPLEMENT LATER
// /**
//   fidelHeaders - x-fidel-signature and x-fidel-timestamp headers
//   payload - request payload (body)
//   secret - webhook secretKey
//   url - webhook URL
// */
// const isSignatureValid = (fidelHeaders, payload, secret, url) => {
//   function base64Digest(s) {
//     return crypto.createHmac('sha256', secret)
//       .update(s)
//       .digest('base64');
//   }

//   /** You can check how much time has passed since the request has been sent */
//   /** timestamp - UTC Unix Timestamp (milliseconds) */
//   const timestamp = fidelHeaders['x-fidel-timestamp'];
//   const content = JSON.stringify(payload) + url + timestamp;

//   const signature = base64Digest(base64Digest(content));
//   return fidelHeaders['x-fidel-signature'] === signature;
// }