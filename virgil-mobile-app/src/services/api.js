import { API } from 'aws-amplify'

export const PostPlaidToken = (token, metadata) => {

  let api = 'virgil-api'
  let path = '/plaid/token'
  let config = {
    body: {
      public_token: token,
      metadata: metadata
    },
    headers: {},
  }

  return Promise(resolve, reject => {
    API.post(api, path, config)
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}


