// React imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useAppContext } from "../libs/context-lib"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateOnboardingData } from '../redux/actions'

// AWS imports
import { Auth } from 'aws-amplify'

// Custom imports
import styles from '../styles/OnboardingForm.styles'
const leftChevron = require('../static/icons/left-chevron.png')

export const OnboardingFormFirstName = ({ navigation }) => {

  const dispatch = useDispatch()
  // const leftChevron = require('../static/icons/left-chevron.png')

  const [textInput, setTextInput] = useState('')

  const formTitle = 'First Name'
  const placeholder = 'Kevin'
  const onSubmit = () => {
    dispatch(updateOnboardingData({ firstName:textInput }))
    navigation.navigate('OnboardingFormLastName')
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
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            />
        </View>

        <TouchableOpacity
          onPress={onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export const OnboardingFormLastName = ({ navigation }) => {

  const dispatch = useDispatch()
  
  const [textInput, setTextInput] = useState('')

  const formTitle = 'Last Name'
  const placeholder = 'Koste'
  const onSubmit = () => {
    dispatch(updateOnboardingData({ lastName:textInput }))
    navigation.navigate('OnboardingFormPhone')
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
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            />
        </View>

        <TouchableOpacity
          onPress={onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export const OnboardingFormPhone = ({ navigation }) => {

  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState('')

  const formTitle = 'Phone Number'
  const placeholder = '1-800-CASH-NOW'
  const onSubmit = () => {

    // add validation logic here
    const validatedPhoneNumber = '+1' + textInput
    console.log(validatedPhoneNumber)

    dispatch(updateOnboardingData({ phoneNumber:validatedPhoneNumber }))
    navigation.navigate('OnboardingFormPassword')
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
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            />
        </View>

        <TouchableOpacity
          onPress= {onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export const OnboardingFormPassword = ({ navigation }) => {
  
  const dispatch = useDispatch()
  const onboardingData = useSelector(state => state.onboardingData)

  const [textInput, setTextInput] = useState('')

  const formTitle = 'Password'
  const placeholder = 'hunter2'
  const onSubmit = () => {

    // add validation logic here
    const validatedPassword = textInput
    console.log(validatedPassword)

    //  on success: update global state, navigate to new page, and call Auth API
    Auth.signUp({
      username: onboardingData.phoneNumber,
      password: validatedPassword,
      attributes: {
        phone_number: onboardingData.phoneNumber,
        "custom:first_name": onboardingData.firstName,
        "custom:last_name": onboardingData.lastName,
      }
    })
    .then(res => {
      console.log(res)
      navigation.navigate('OnboardingFormVerify')
      dispatch(updateOnboardingData({ password:validatedPassword }))
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
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            />
        </View>

        <TouchableOpacity
          onPress= {onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}


export const OnboardingFormVerify = ({ navigation }) => {

  // used after logging in the user
  const { setUserAuthenticated } = useAppContext()

  const onboardingData = useSelector(state => state.onboardingData)

  const [textInput, setTextInput] = useState('')

  const formTitle = 'Verify Phone'
  const placeholder = '******'
  
  const onSubmit = () => {

    // add validation logic here
    const validatedCode = textInput

    // on success: update global state, navigate to new page, and call Auth API
    Auth.confirmSignUp(
      onboardingData.phoneNumber, 
      validatedCode
    )
    .then(user => {
      // after confirming signup, sign the user in
      Auth.signIn({
        username: onboardingData.phoneNumber,
        password: onboardingData.password
      })
      .then(user => {
        setUserAuthenticated(true)
        console.log(user)
      })
      .catch(err => {
        console.log('Successfully verified but unable to sign in')
        console.log(err.message)
      })
    })
    .catch(err => {
      console.log('Unable to verify code')
      console.log(err.message)
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
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={placeholder}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            />
        </View>

        <TouchableOpacity
          onPress= {onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}


// example for how to update user data using Auth API, could add later
// export const OnboardingFormEmail = ({ navigation }) => {

//   const [textInput, setTextInput] = useState('')

//   const formTitle = 'Email Address'
//   const placeholder = 'hanky@panky.com'
//   const onSubmit = () => {

//     // add validation logic here
//     const validatedEmail = textInput

//     // on success: update global state, navigate to home, and call Auth API
//     Auth.currentAuthenticatedUser().then(user => {
//       console.log('Successfully retrieved authenticated user data')
//       Auth.updateUserAttributes(user, {
//         email: validatedEmail
//       })
//       .then(res => {
//         console.log(res)
//         navigation.navigate('Main')
//       })
//       .catch(err => {
//         console.log('Unable to update user attributes')
//         console.log(err)
//       })
//     })
//     .catch(err => {
//       console.log('Unable to get current authenticated user data')
//       console.log(err)
//     })
//   }

//   return (
//     <SafeAreaView style={styles.screenContainer} forceInset={{bottom:'never'}}>

//       <View style={styles.headerContainer}>
//         <View style={styles.headerTitleContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{top:10, left:10, bottom:10, right:50}}>
//             <Image source={leftChevron} style={{height:20, width:10.5, marginRight:12, marginTop:4 }} />
//           </TouchableOpacity>
//           <Text numberOfLines={1} style={styles.headerTitle}>{formTitle}</Text>
//         </View>
//       </View>

//       <View style={[styles.contentContainer, { paddingTop:97 }]} showsVerticalScrollIndicator={false}>

//         <View style={styles.textInputContainer}>
//           <TextInput style={styles.textInput} returnKeyType='send'
//             onSubmitEditing={onSubmit}
//             placeholder={placeholder}
//             onChangeText={(text) => setTextInput(text)}
//             value={textInput}
//             />
//         </View>

//         <TouchableOpacity
//           onPress= {onSubmit}
//           style={styles.button}>
//           <Text style={styles.buttonText}>NEXT</Text>
//         </TouchableOpacity>

//       </View>

//     </SafeAreaView>
//   )
// }

