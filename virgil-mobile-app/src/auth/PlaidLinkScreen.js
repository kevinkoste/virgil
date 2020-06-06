// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/LandingScreen.styles'

// Plaid Link
import axios from 'axios'
import PlaidLink from 'react-native-plaid-link-sdk'
import { PLAID_SERVICE_ADDRESS, PLAID_PUBLIC_KEY, PLAID_ENV, PLAID_PRODUCTS } from 'react-native-dotenv'


export default function PlaidLinkScreen({ navigation }) {

  const onSuccess = (token, metadata) => {
    axios.post(PLAID_SERVICE_ADDRESS + '/plaid', {
      public_token: token,
      metadata: metadata
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const onExit = () => { navigation.navigate('Main') }

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
        publicKey={PLAID_PUBLIC_KEY}
        clientName={'Virgil'}
        env={PLAID_ENV}
        product={PLAID_PRODUCTS}
        onSuccess={onSuccess}
        onExit={onExit}
        componentProps={{ style: styles.button }}
      >
        <Text style={styles.buttonText}>
          Link Your Card
        </Text>
      </PlaidLink>

      {/* <TouchableOpacity
        onPress={() => open()}
        disabled={!ready}
        style={styles.button}>
        <Text style={styles.buttonText}>Link Your Card</Text>
      </TouchableOpacity> */}


    </SafeAreaView>
  )
}


