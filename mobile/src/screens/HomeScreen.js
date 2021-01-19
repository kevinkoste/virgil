// React/Redux imports
import React, { useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'

import moment from 'moment'
import { formatMoney } from '../utils/utils'

import styles from '../styles/ScreenStyles'
import TransactionTileRecent from '../components/TransactionTileRecent'
import RewardCardTile from '../components/RewardCardTile'
import ForYouTile from '../components/ForYouTile'

export default function HomeScreen({ route, navigation }) {

  // Get all transactions in the current month
  const now = useSelector(state => state.now)

  function greeting(now) {
    const hourOfDay = moment(now).hour()
    return (hourOfDay < 4) ? 'Good Evening'
    : (hourOfDay < 13) ? 'Good Morning'
    : (hourOfDay < 18) ? 'Good Afternoon'
    : 'Good Evening'
  }

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

      {/* this is the header, positioned absolute */}
      <Animated.View style={[styles.headerContainer, {height: headerScrollHeight}]}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{greeting(now)}</Text>
        </View>
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>Today is {now.format('MMM. D')}</Text>
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

          <ForYouTile />

          <RewardCardTile
            title='ACTIVE REWARDS'
            filter={item => item.active === true}
            />

          <TransactionTileRecent
            tileTitle='RECENT'
            navigateOnPress={(item) => ['SpendingList', {merchant: item.merchant}] }
            titleMap={(item) => item.merchant}
            subtitleMap={(item) => moment(item.trans_date).format('MMMM Do')}
            valueMap={(item) => '$'+formatMoney(item.amount)}
            />



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
