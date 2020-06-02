// React/Expo imports
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext } from "./src/libs/context-lib"

import * as Font from 'expo-font'

// Redux imports
import { Provider } from 'react-redux'
import store from './src/redux/store'

// Auth imports
import Amplify from 'aws-amplify'
import AmplifyConfig from './src/utils/amplify-config'
Amplify.configure(AmplifyConfig)
import { Auth } from 'aws-amplify'

// custom components
import AppNavigator from './src/navigation/AppNavigator'
import AuthNavigator from './src/navigation/AuthNavigator'

console.disableYellowBox = true

const App = () => {

  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const [authPending, setAuthPending] = useState(true)
  const [fontPending, setFontPending] = useState(true)

  async function LoadAuth() {
    Auth.currentSession()
    .then(res => {
      console.log('Successfully retrieved User from current session')
      setUserAuthenticated(true)
    })
    .catch(err => {
      console.log('No current user')
      console.log(err.message)
    })
    setAuthPending(false)
  }

  async function LoadFonts() {
    Font.loadAsync({
      'gill-reg': require('./src/static/fonts/GillSans.ttf'),
      'gill-semibold': require('./src/static/fonts/GillSans-SemiBold.ttf'),
    })
    .then(res => {
      console.log('Successfully loaded fonts')
    })
    .catch(err => {
      console.log('Unable to load fonts')
      console.log(err.message)
    })
    setFontPending(false)
  }


  useEffect(() => {

    // potentially do other stuff like register for push notifications, fetch data, etc
    LoadAuth()
    LoadFonts()

  }, [])


  if (fontPending || authPending) {
    return <ActivityIndicator />
  } else {
    return (
      // this is the React Context provider
      <AppContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
  
        {/* this is the Redux provider */}
        <Provider store={store}>
          <SafeAreaProvider>

            {/* <AppNavigator /> */}
  
            { userAuthenticated
              ? <AppNavigator />
              : <AuthNavigator />
            }
  
          </SafeAreaProvider>
        </Provider>
  
      </AppContext.Provider>
      
    )
  }
}

export default App