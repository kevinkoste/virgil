// React/Redux imports
import { combineReducers } from 'redux'

// Import action types to be reduced
import * as actions from './actions'
import moment from 'moment'

// currently importing static reward data from local js file
import { rewardData, dateRangeOptions, rewardCategoryData, transactionData } from '../static/static-data'

// Initial state
const initialState = {
  now: moment(),
  credits: 5,
  name: 'Matthew Mizbani',

  transactionDataPending: false,
  transactionDataError: null,
  transactionData: transactionData,

  selectedDateRange: dateRangeOptions[0],
  selectedTransactionData: transactionData.filter(item =>
    moment(item.trans_date).isBetween(dateRangeOptions[0].start, dateRangeOptions[0].end)
  ),

  rewardData: rewardData,
  rewardCategoryData: rewardCategoryData,
  dateRangeOptions: dateRangeOptions,

  onboardingData: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    phoneNumber: '',
  }
}

function fetchTransactionReducer(state = initialState, action) {
  switch (action.type) {

    case actions.FETCH_TRANSACTIONS_PENDING:
      return {
        ...state,
        transactionDataPending: true,
      }

    case actions.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactionDataPending: false,
        transactionData: action.transactionData,
        selectedTransactionData: action.transactionData.filter(item =>
          moment(item.trans_date).isBetween(state.selectedDateRange.start, state.selectedDateRange.end)
        )
      }

    case actions.FETCH_TRANSACTIONS_ERROR:
      return {
        ...state,
        transactionDataPending: false,
        transactionDataError: action.error
      }

    case actions.SELECT_TRANSACTIONS:
      const dateRangeObject = dateRangeOptions[action.dateRangeOption]
      return {
        ...state,
        selectedDateRange: dateRangeObject,
        selectedTransactionData: state.transactionData.filter(item =>
          moment(item.trans_date).isBetween(dateRangeObject.start, dateRangeObject.end)
        )
      }
    
    case actions.ACTIVATE_REWARD:
      return {
        ...state,
        credits: state.credits - action.price,
      }

    case actions.UPDATE_ONBOARDING_DATA:
      return {
        ...state,
        onboardingData: {
          ...state.onboardingData,
          firstName: action.onboardingData.firstName || state.onboardingData.firstName,
          lastName: action.onboardingData.lastName || state.onboardingData.lastName,
          phoneNumber: action.onboardingData.phoneNumber || state.onboardingData.phoneNumber,
          password: action.onboardingData.password || state.onboardingData.password,
          emailAddress: action.onboardingData.emailAddress || state.onboardingData.emailAddress,
        }
      }

    default: 
      return state
  }
}


const rootReducer = combineReducers({
  fetchTransactionReducer,
})

export default fetchTransactionReducer