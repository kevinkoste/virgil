// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/LandingScreen.styles'

// Fidel
// import { FIDEL_API_KEY, FIDEL_PROGRAM_ID } from 'react-native-dotenv'
// import Fidel from 'fidel-react-native'
// Fidel.setup({
//   apiKey: FIDEL_API_KEY,
//   programId: FIDEL_PROGRAM_ID
// })


export default ({ navigation }) => {

  const initiateCardLink = () => {

    // // open fidel form
    // Fidel.openForm((err, res) => {
    //   if (err) {
    //     console.error(error)
    //   } else {
    //     console.info(res)
    //   }
    // })
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

      <TouchableOpacity
        onPress={initiateCardLink}
        style={styles.button}>
        <Text style={styles.buttonText}>Link Your Card</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}
