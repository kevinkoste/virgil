// React imports
import React from 'react'

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Auth screen imports
import LandingScreen from '../auth/LandingScreen'
import LoginForm from '../auth/LoginForm'
import { OnboardingFormFirstName, OnboardingFormLastName, OnboardingFormPhone,
  OnboardingFormPassword, OnboardingFormVerify } from '../auth/OnboardingForm'

// Onboarding Stack Navigator
const OnboardingStack = createStackNavigator()
function OnboardingStackScreen() {
  return (
    <OnboardingStack.Navigator headerMode={'none'}>
      <OnboardingStack.Screen name='OnboardingFormFirstName' component={OnboardingFormFirstName} />
      <OnboardingStack.Screen name='OnboardingFormLastName' component={OnboardingFormLastName} />
      <OnboardingStack.Screen name='OnboardingFormPhone' component={OnboardingFormPhone} />
      <OnboardingStack.Screen name='OnboardingFormPassword' component={OnboardingFormPassword} />
      <OnboardingStack.Screen name='OnboardingFormVerify' component={OnboardingFormVerify} />
    </OnboardingStack.Navigator>
  )
}

// Login Stack Navigator
const LoginStack = createStackNavigator()
function LoginStackScreen() {
  return (
    <LoginStack.Navigator headerMode={'none'}>
      <LoginStack.Screen name='LoginForm' component={LoginForm} />
    </LoginStack.Navigator>
  )
}


// Root Stack Navigator with several Navigator children
const AuthStack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode='none'>

        <AuthStack.Screen name='Landing' component={LandingScreen} />
        <AuthStack.Screen name='Onboarding' component={OnboardingStackScreen} />
        <AuthStack.Screen name='Login' component={LoginStackScreen} />

      </AuthStack.Navigator>
    </NavigationContainer>
  )
}