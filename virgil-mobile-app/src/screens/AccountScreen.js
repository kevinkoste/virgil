// React/Redux imports
import React, { useRef } from 'react'
import { View, Text, ScrollView, Animated, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'

import styles from '../styles/ScreenStyles'
import AccountTile from '../components/AccountTile'
import BalanceBar from '../components/BalanceBar'
import AskUsTile from '../components/AskUsTile'

export default function AccountScreen({ route, navigation }) {

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

          <TouchableOpacity
            style={{justifyContent:'center', alignItems:'center', height:50}}
            onPress = { () => {navigation.navigate('Experience')} }>
              <Text> Go To Experience</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
