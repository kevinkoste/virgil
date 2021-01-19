
// Redux imports
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // middleware to enable API calls

import rootReducer from './reducers'
import fetchTransactionsReducer from './reducers'

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(fetchTransactionsReducer, applyMiddleware(thunk))


export default store;
