// React imports
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

// Redux imports
import { useDispatch } from 'react-redux'
import { fetchAllTransactions } from '../redux/actions'
import { registerForPushNotifications } from '../utils/notifications'

// The custom AppNavigator and store
import * as Font from 'expo-font';
import AppNavigator from '../navigation/AppNavigator'

export default function AppLauncher () {

  // use local state to await font loading
  [fontPending, setFontPending] = useState(true)

  // get dispatch to be used on mount (useEffect below)
  const dispatch = useDispatch()

  // this function runs on app launch
  useEffect(() => {
    
    // prompts user to accept notification permissions and sends push token to server
    registerForPushNotifications()

    // dispatches action to fetch transaction data from server
    dispatch(fetchAllTransactions())

    const initializeApp = async () => {
      await Font.loadAsync({
        'gill-reg': require('../static/fonts/GillSans.ttf'),
        'gill-semibold': require('../static/fonts/GillSans-SemiBold.ttf'),
      })
      setFontPending(false)
    }

    initializeApp()

  }, [])

  if (fontPending) {
    return <ActivityIndicator />
  } else {
    return <AppNavigator />
  }
}