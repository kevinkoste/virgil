// function to be tested
import webhookFidel from "../functions/webhookFidel"

let mockEvent
let mockResponse

// test fidel-card-linked event
test('webhookFidel successfully handles fidel-card-linked event', () => {

  mockEvent = {
    "headers": {
      "event":"fidel-card-linked"
    },
    "body": {
      "id":"mock-card-id",
      "accountId":"mock-account-id",
      "firstNumbers":"mock-first-numbers"
    }
  }

  mockResponse = [
    200,
    { message: "success" }
  ]

  expect(webhookFidel(mockEvent)).toBe(mockResponse)
})

// test fidel-transaction-auth event
test('webhookFidel successfully handles fidel-transaction-auth event', () => {

  mockEvent = {
    "headers": {
      "event":"fidel-transaction-auth"
    },
    "body": {
      "id":"mock-transaction-id",
      "accountId":"mock-account-id",
      "card": {
        "id":"mock-card-id"
      },
      "amount":"mock-transaction-amount"
    }
  }

  mockResponse = [
    200,
    { message: "success" }
  ]

  expect(webhookFidel(mockEvent)).toBe(mockResponse)
})