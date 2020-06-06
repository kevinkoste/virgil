import plaid from '../libs/plaid-lib'
import { main as postPlaidToken } from "../functions/postPlaidToken"

let publicToken
let event
let context
let expected

// test fidel-card-linked event
test('Lambda Function "postPlaidToken" handles new Plaid Link event', () => {

  plaid.sandboxPublicTokenCreate("ins_109508", ["transactions"]).then(res => {

    publicToken = res.public_token

    event = {
      body: {
        public_token: publicToken,
      },
      requestContext: {
        identity: {
          cognitoIdentityId: "MOCK-USER_5"
        }
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


    return postPlaidToken(event, context).then(received => {
      expect(received).toMatchObject(expected)
    })

  }).catch(err => {
    console.log(err)
    throw Error('unable to generate sandbox test public_token')
  })
  



})


