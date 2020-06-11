import * as debug from "./debug-lib"

export default function handler(lambda) {
  return function (event, context) {

    // Immediate response for warm-up events
    if (event.source === 'serverless-plugin-warmup') {
      debug.log('Warm-up event')
      return [200, { message: 'Lambda is warm!' }]
    }

    // Default handler logic
    return Promise.resolve()
      // Start debugger
      .then(() => debug.init(event, context))
      // Run the Lambda
      .then(() => lambda(event, context))
      // On success
      .then((responseBody) => [200, responseBody])
      // On failure
      .catch((e) => {
        // Print debug messages
        debug.flush(e)
        return [500, { error: e.message }]
      })
      // Return HTTP response
      .then(([statusCode, body]) => ({
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(body),
      }))
      // Cleanup debugger
      .finally(debug.end)
  }
}

// helper function to get user pool user id (our dynamodb primary key) from any authenticated request
export const getUserPoolUserId = (event) => {
  const authProvider = event.requestContext.identity.cognitoAuthenticationProvider
  const parts = authProvider.split(':')

  // const userPoolIdParts = parts[parts.length - 3].split('/')
  // const userPoolId = userPoolIdParts[userPoolIdParts.length - 1]
  const userPoolUserId = parts[parts.length - 1]

  return userPoolUserId
}