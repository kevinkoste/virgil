// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/LandingScreen.styles'

// Libs
import PlaidLink from 'react-native-plaid-link-sdk'
import { PLAID_PUBLIC_KEY, PLAID_ENV } from 'react-native-dotenv'
import { PostPlaidToken } from '../services/api'


export default function PlaidLinkScreen({ navigation }) {

  const onSuccess = async (token, metadata) => {

    PostPlaidToken(token, metadata).then(res => {
      console.log(res)
      // perhaps trigger fetch transactions
      navigation.navigate('Main')
    }).catch(err => {
      console.log(err)
      alert('Unable to save your response. Please try again later.')
      navigation.navigate('Main')
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
        publicKey={PLAID_PUBLIC_KEY}
        clientName={'Virgil'}
        env={PLAID_ENV}
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


