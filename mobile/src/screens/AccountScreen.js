// React/Redux imports
import React, { useRef } from 'react'
import { View, Text, ScrollView, Animated, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import { useSelector } from 'react-redux'
import { useAppContext } from "../libs/context-lib"


import styles from '../styles/ScreenStyles'
import AccountTile from '../components/AccountTile'
import BalanceBar from '../components/BalanceBar'
import AskUsTile from '../components/AskUsTile'

import { Auth, API } from 'aws-amplify'
import axios from 'axios'

export default function AccountScreen({ route, navigation }) {

  // unauthenticate user on logout
  const { setUserAuthenticated } = useAppContext()

  const name = useSelector(state => state.name)

  // Collapsing header support
  const minHeight = 58
  const maxHeight = 97
  const collapseDistance = maxHeight - minHeight
  const scrollOffsetY = useRef(new Animated.Value(0)).current
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, collapseDistance],
    outputRange: [maxHeight, minHeight],
    extrapolate: 'clamp'
  })


  const handleGoToExperience = () => {
    navigation.navigate('Experience')
  }

  const handleCardLink = () => {
    navigation.navigate('PlaidLink')
  }

  const handleLogOut = () => {
    Auth.signOut().then(res => {
      console.log('Successfully signed user out')
      setUserAuthenticated(false)
    }).catch(err => {
      alert('Unable to log out. Please try again later.')
    })
  }

  const handleApiTest = async () => {

    // const apiName = 'virgil-api'
    // const path = '/transactions'
    // API.get(apiName, path)

    const authObj = { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
    console.log(authObj)

    var instance = axios.create({
      baseURL: 'https://dev-api.virgilcard.com',
      timeout: 1000,
      headers: {'Authorization': authObj}
    })

    axios.get('https://dev-api.virgilcard.com/transactions', {


    })
    .then(res => {
      console.log(res)
      alert(res)
    })
    .catch(err => {
      console.log(err)
      alert(err)
    })
  }

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ bottom: 'never' }}>
      <Animated.View style={[styles.headerContainer, {height: headerScrollHeight}]}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Account</Text>
        </View>
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>{name}</Text>
        </View>
      </Animated.View>

      <ScrollView
        style={styles.contentContainer}
        scrollIndicatorInsets={{top:97}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: scrollOffsetY }}} ]) }
        scrollEventThrottle={8}>
        <View style={{paddingTop:maxHeight}}>

          {/* screen content goes here */}

          <AskUsTile />

          <BalanceBar
            title='YOUR BALANCE'
            />

          <AccountTile />

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height:50}}
            onPress = {handleGoToExperience}>
            <Text>Go To Experience</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height:50}}
            onPress = {handleCardLink}>
            <Text>Link a Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height:50}}
            onPress = {handleLogOut}>
            <Text>Log Out</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height:50}}
            onPress = {handleApiTest}>
            <Text>Test API</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
