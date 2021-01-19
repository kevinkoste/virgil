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

// Validate imports
import { validate } from 'validate.js'

// React Navigation
import { useNavigation } from '@react-navigation/native'


const constraints = {
  'First Name': {
    text: {
      presence: {
        allowEmpty: false,
        message: "^Name cannot be blank"
      },
    },
  }

};


const OnboardingScreen = (props) => {
  // props: formTitle, placeholder, nextScreen, inputProps

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState('')
  const [errors, setErrors] = useState('')

  const onSubmit = () => {
    const validationResult = validate({text:textInput}, constraints[props.formTitle])
    if (validationResult) {
      setErrors(validationResult)
    }
    else {
      dispatch(updateOnboardingData({formTitle: textInput}))
      navigation.navigate(props.nextScreen)
    }
  }

  const onChangeText = (text) => {
    setTextInput(text)
    const validationResult = validate({text:text}, constraints[props.formTitle])
    setErrors(validationResult)
  }

  const getErrorMessages = (separator="\n") => {
    if (!errors) return [];
  
    return Object.values(errors).map(it => it.join(separator)).join(separator);
  }

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{bottom:'never'}}>

      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{top:10, left:10, bottom:10, right:50}}>
            <Image source={leftChevron} style={{height:20, width:10.5, marginRight:12, marginTop:4 }} />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.headerTitle}>{props.formTitle}</Text>
        </View>
      </View>

      <View style={[styles.contentContainer, { paddingTop:97 }]} showsVerticalScrollIndicator={false}>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} returnKeyType='send'
            onSubmitEditing={onSubmit}
            placeholder={props.placeholder}
            onChangeText={onChangeText}
            value={textInput}
            {...props.inputProps}
            />
        </View>

        <Text>
          {getErrorMessages()}
        </Text>

        <TouchableOpacity
          onPress={onSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export const OnboardingFormFirstName = () => {
  return(
    <OnboardingScreen
      formTitle={'First Name'}
      placeholder={'Kevin'}
      nextScreen={'OnboardingFormLastName'}
    />
  )
}

export const OnboardingFormLastName = () => {
  return(
    <OnboardingScreen
      formTitle={'Last Name'}
      placeholder={'Koste'}
      nextScreen={'OnboardingFormPhone'}
    />
  )
}

export const OnboardingFormPhone = () => {
  return(
    <OnboardingScreen
      formTitle={'Phone Number'}
      placeholder={'1-800-CASH-NOW'}
      nextScreen={'OnboardingFormPassword'}
      inputProps={{keyboardType : "phone-pad"}}
    />
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
      username: onboardingData['Phone Number'],
      password: validatedPassword,
      attributes: {
        phone_number: onboardingData['Phone Number'],
        "custom:first_name": onboardingData['First Name'],
        "custom:last_name": onboardingData['Last Name'],
      }
    })
    .then(res => {
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
            secureTextEntry={true}
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

