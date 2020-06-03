import handler from "../libs/handler-lib"
import dynamoDb from "../libs/dynamodb-lib"

/**
 * function to handle all Fidel webhooks
 * handles different events based on required "event" header
 * dumps new data to dynamoDb tables
 */
export const main = handler(async (event, context) => {

  // parse headers and body
  const requestHeaders = JSON.parse(event.headers)
  const requestBody = JSON.parse(event.body)

  switch (requestHeaders.event) {

    // new linked card event
    case 'fidel-card-linked':
      try {
        await dynamoDb.put({
          TableName: 'virgil-cards',
          Item: {
            cardId: requestBody.id,
            accountId: requestBody.accountId,
            createdAt: Date.now(),
            fidelEvent: requestBody
          }
        })
        return { message: "success" }
      } catch {
        throw new Error("Unable to put to cards table")
      }

    // new transaction authorization event
    case 'fidel-transaction-auth':
      try {
        await dynamoDb.put({
          TableName: 'virgil-transactions',
          Item: {
            transactionId: requestBody.id,
            accountId: requestBody.accountId,
            cardId: requestBody.card.id,
            createdAt: Date.now(),
            fidelEvent: requestBody
          }
        })
        return { message: "success" }
      } catch {
        throw new Error("Unable to put to transactions table")
      }

    default:
      throw new Error(`Invalid Fidel event, "event" header not present`)
  }
})
