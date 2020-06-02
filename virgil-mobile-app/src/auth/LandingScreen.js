// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/LandingScreen.styles'

export default function LandingScreen({ route, navigation }) {

  return (
    <SafeAreaView
      style={[styles.screenContainer, {justifyContent: 'space-between', paddingVertical:50}]}
      forceInset={{ bottom: 'never' }}>

      <View style={{height:60, width:0, marginTop:60}} />

      <View style={styles.contentContainer}>

        <Text style={[styles.title, {marginBottom: 8}]}>
          Virgil
        </Text>

        <Text style={styles.subtitle}>
          Guide for your spending and leisure
        </Text>

      </View>

      <View>
        <TouchableOpacity
          onPress= {() => { navigation.navigate('Login') }}
          style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress= {() => { navigation.navigate('Onboarding') }}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

