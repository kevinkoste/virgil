// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useAppContext } from "../libs/context-lib"

// AWS imports
import { Auth } from 'aws-amplify'

// Custom imports
import styles from '../styles/OnboardingForm.styles'
const leftChevron = require('../static/icons/left-chevron.png')

const LoginForm = ({ navigation }) => {

  // authenticate user upon successful login
  const { setUserAuthenticated } = useAppContext()

  const [phoneInput, setPhoneInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const formTitle = 'Sign In'
  const placeholder1 = '+1-800-CASH-NOW'
  const placeholder2 = 'hunter2'

  const onSubmit = () => {

    // validate
    const validatedPhoneInput = phoneInput
    const validatedPassword = passwordInput

    Auth.signIn({
      username: validatedPhoneInput,
      password: validatedPassword
    })
    .then(user => {
      setUserAuthenticated(true)
      console.log(user)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{bottom:'never'}}>

      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{top:10, left:10, bottom:10, right:50}}>
            <Image source={leftChevron} style={{height:20, width:10.5, marginRight:12, marginTop:4 }} />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.headerTitle}>{formTitle}</Text>
        </View>
      </View>

      <View style={[styles.contentContainer, { paddingTop:97 }]} showsVerticalScrollIndicator={false}>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            returnKeyType='send'
            placeholder={placeholder1}
            onChangeText={(text) => setPhoneInput(text)}
            value={phoneInput}
            />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder2}
            onChangeText={(text) => setPasswordInput(text)}
            value={passwordInput}
            />
        </View>

        <TouchableOpacity
          onPress={onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default LoginForm