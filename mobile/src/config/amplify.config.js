import { Auth, API } from 'aws-amplify'
import { 
  COGNITO_REGION, 
  COGNITO_USER_POOL_ID,
  COGNITO_IDENTITY_POOL_ID,
  COGNITO_APP_CLIENT_ID,
  API_GATEWAY_URL
} from 'react-native-dotenv'

export default {
  Auth: {
    mandatorySignIn: true,
    region: COGNITO_REGION,
    userPoolId: COGNITO_USER_POOL_ID,
    identityPoolId: COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: COGNITO_APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'virgil-api',
        endpoint: API_GATEWAY_URL,
        custom_header: async () => { 
          return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
        }
      }
    ]
  }
}