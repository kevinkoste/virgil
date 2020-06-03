import handler from "../libs/handler-lib"
import dynamoDb from "../libs/dynamodb-lib"

/**
 * function to handle all Fidel webhooks
 * handles different events based on required "event" header
 * dumps new data to dynamoDb tables
 */
export const main = handler(async (event, context) => {

  // handle request to webhook based on custom "event" header
  switch (event.headers.event) {

    // new linked card event
    case 'fidel-card-linked':
      try {
        await dynamoDb.put({
          TableName: 'virgil-cards',
          Item: {
            cardId: event.body.id,
            accountId: event.body.accountId,
            createdAt: Date.now(),
            fidelEvent: event.body
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
            transactionId: event.body.id,
            accountId: event.body.accountId,
            cardId: event.body.card.id,
            createdAt: Date.now(),
            fidelEvent: event.body
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
