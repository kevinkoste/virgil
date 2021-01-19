// API call helpers
import axios from 'axios'
import { API_GATEWAY_URL } from 'react-native-dotenv'

// Action types
export const FETCH_TRANSACTIONS_PENDING = 'FETCH_TRANSACTIONS_PENDING'
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS'
export const FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR'
export const SELECT_TRANSACTIONS = 'SELECT_TRANSACTIONS'
export const ACTIVATE_REWARD = 'ACTIVATE_REWARD'
export const UPDATE_ONBOARDING_DATA = 'UPDATE_ONBOARDING_DATA'

// Action creators
export function activateReward(rewardPrice) {
  return {
    type: ACTIVATE_REWARD,
    price: rewardPrice
  }
}

function fetchTransactionsPending() {
  return {
    type: FETCH_TRANSACTIONS_PENDING
  }
}

function fetchTransactionsSuccess(transactionData) {
  return {
    type: FETCH_TRANSACTIONS_SUCCESS,
    transactionData: transactionData,
  }
}

function fetchTransactionsError(error) {
  return {
    type: FETCH_TRANSACTIONS_ERROR,
    error: error,
  }
}

export function selectDateRange(dateRangeOption) {
  return {
    type: SELECT_TRANSACTIONS,
    dateRangeOption: dateRangeOption,
  }
}

// helper function for fetchTransactionsIfNeeded
export function fetchAllTransactions() {
  return dispatch => {
    dispatch(fetchTransactionsPending())
    axios.get(VIRGIL_API_ENDPOINT + '?period=all')
      .then(response => dispatch(fetchTransactionsSuccess(response.data)))
      .catch(error => dispatch(fetchTransactionsError(error)))
  }
}

export function updateOnboardingData(newOnboardingData) {
  return {
    type: UPDATE_ONBOARDING_DATA,
    onboardingData: newOnboardingData,
  }
}
