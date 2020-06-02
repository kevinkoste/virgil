import { 
  COGNITO_REGION, 
  COGNITO_USER_POOL_ID,
  COGNITO_IDENTITY_POOL_ID,
  COGNITO_APP_CLIENT_ID,
  S3_REGION,
  S3_BUCKET,
  API_GATEWAY_REGION,
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
  Storage: {
    region: S3_REGION,
    bucket: S3_BUCKET,
    identityPoolId: COGNITO_IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: API_GATEWAY_URL,
        region: API_GATEWAY_REGION
      },
    ]
  }
}