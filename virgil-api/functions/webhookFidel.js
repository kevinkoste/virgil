import handler from "../libs/handler-lib"
import dynamoDb from "../libs/dynamodb-lib"

/**
 * function to handle all Fidel webhooks
 * handles different events based on required "event" header
 * dumps new data to dynamoDb tables
 */
export const main = handler(async (event, context) => {

  // somehow confirm that event.body needs to be parsed, behavior is unpredictable
  const requestBody = JSON.parse(event.body)

  // handle request to webhook based on custom "event" header
  switch (event.headers.event) {

    // new linked card event
    case 'fidel-card-linked':
      try {
        await dynamoDb.put({
          TableName: process.env.CARDS_TABLE_NAME,
          Item: {
            cardId: requestBody.id,
            accountId: requestBody.accountId,
            createdAt: Date.now(),
            fidelEvent: requestBody
          }
        })
        return { message: "success" }
      } catch (err) {
        // throw lots of useful information for debugging
        throw { message: err, item: {
          cardId: requestBody.id,
          accountId: requestBody.accountId,
          createdAt: Date.now(),
          fidelEvent: requestBody
        }}
        // throw new Error("Unable to put to cards table")
      }

    // new transaction authorization event
    case 'fidel-transaction-auth':
      try {
        await dynamoDb.put({
          TableName: process.env.TRANSACTIONS_TABLE_NAME,
          Item: {
            transactionId: requestBody.id,
            accountId: requestBody.accountId,
            cardId: requestBody.card.id,
            createdAt: Date.now(),
            fidelEvent: requestBody
          }
        })
        return { message: "success" }
      } catch (err) {
        // throw lots of useful information for debugging
        throw { message: err, item: {
          transactionId: requestBody.id,
          accountId: requestBody.accountId,
          cardId: requestBody.card.id,
          createdAt: Date.now(),
          fidelEvent: requestBody
        }}
        // throw new Error("Unable to put to transactions table")
      }

    default:
      throw new Error(`Invalid Fidel event, "event" header not present`)
  }
})
