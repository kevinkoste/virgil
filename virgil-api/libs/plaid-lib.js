import plaid from 'plaid'

const client = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET || process.env.PLAID_SECRET_SANDBOX,
  process.env.PLAID_PUBLIC_KEY,
  plaid.environments[process.env.PLAID_ENV || 'sandbox'],
  {
    version: '2019-05-29',
    clientApp: 'Plaid App'
  }
)

export default client