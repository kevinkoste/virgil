// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/LandingScreen.styles'

// Libs
import { API } from 'aws-amplify'
import PlaidLink from 'react-native-plaid-link-sdk'
import { PLAID_PUBLIC_KEY, PLAID_ENV, PLAID_WEBHOOK } from 'react-native-dotenv'


export default function PlaidLinkScreen({ navigation }) {

  const onSuccess = async (token, metadata) => {

    const apiName = 'virgil-api'
    const path = '/plaid/token'
    const config = {
      body: {
        public_token: token,
        metadata: metadata
      },
      headers: {},
    }

    API.post(apiName, path, config)
    .then(res => {
      console.log(res)
      navigation.navigate('Main')
    })
    .catch(err => {
      console.log(err)
      alert(err)
    })

  }

  const onExit = () => {
    navigation.navigate('Main')
  }

  return (
    <SafeAreaView
      style={[styles.screenContainer, {justifyContent: 'space-between', paddingVertical:50}]}
      forceInset={{ bottom: 'never' }}>

      <View style={{height:60, width:0, marginTop:60}} />

      <View style={styles.contentContainer}>

        <Text style={[styles.title, {marginBottom: 8}]}>
          Link a Card
        </Text>

        <Text style={styles.subtitle}>
          Connect your most frequently used credit or debit card
        </Text>

      </View>

      <PlaidLink
        clientName={'Virgil'}
        publicKey={PLAID_PUBLIC_KEY}
        env={PLAID_ENV}
        webhook={PLAID_WEBHOOK}
        product={['auth','transactions']}
        onSuccess={onSuccess}
        onExit={onExit}
        componentProps={{ style: styles.button }}
      >
        <Text style={styles.buttonText}>
          Link Your Card
        </Text>
      </PlaidLink>

    </SafeAreaView>
  )
}


