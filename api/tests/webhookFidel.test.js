// function to be tested
import { main as webhookFidel } from "../functions/webhookFidel"

let event
let context
let expected

// test fidel-card-linked event
test('Lambda Function "webhookFidel" handles fidel-card-linked event', () => {

  event = {
    headers: {
      event: "fidel-card-linked"
    },
    body: {
      id: "mock-card-id",
      accountId: "mock-account-id",
      firstNumbers: "mock-first-numbers"
    },
    pathParameters: {},
    queryStringParameters: {}
  }

  context = {
    getRemainingTimeInMillis: () => 6000,
  }

  expected = {
    body: "{\"message\":\"success\"}",
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200
  }

  return webhookFidel(event, context).then(received => {
    expect(received).toMatchObject(expected)
  })
})

// test fidel-transaction-auth event
test('Lambda Function "webhookFidel" handles fidel-transaction-auth event', () => {

  event = {
    headers: {
      event: "fidel-transaction-auth"
    },
    body: {
      id: "mock-transaction-id-222",
      accountId: "mock-account-id",
      card: {
        id: "mock-card-id"
      },
      amount: "mock-transaction-amount"
    },
    pathParameters: {},
    queryStringParameters: {}
  }

  context = {
    getRemainingTimeInMillis: () => 6000,
  }

  expected = {
    body: "{\"message\":\"success\"}",
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200
  }

  return webhookFidel(event, context).then(received => {
    expect(received).toMatchObject(expected)
  })
})