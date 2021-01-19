// React/Redux imports 
import React, { useState, useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import BarChartTile from '../components/BarChartTile'

// Utilities for formatting
import moment from 'moment'
import { formatMoney } from '../utils/utils'

// Custom components
import styles from '../styles/ScreenStyles'
import DatePicker from '../components/DatePicker'
import TransactionTile from '../components/TransactionTile'

export default function SpendingScreen({ route, navigation }) {

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
          <Text style={styles.headerTitle}>Spending</Text>
        </View>
        <View style={styles.headerSubtitleContainer}>
          <DatePicker />
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

          <BarChartTile
            />

          <TransactionTile
            tileTitle='FREQUENT SPENDING'
            filter='FREQUENT'
            navigateOnPress={(item) => ['SpendingList', {merchant: item.merchant}] }
            titleMap={(item) => item.merchant}
            subtitleMap={(item) => item.count+'x'}
            valueMap={(item) => '$'+formatMoney(item.amount)}
            />

          <TransactionTile
            tileTitle='CATEGORIES'
            filter='CATEGORIES'
            navigateOnPress={(item) => ['SpendingList', {category: item.category}] }
            titleMap={(item) => item.category}
            subtitleMap={(item) => item.count+'x'}
            valueMap={(item) => '$'+formatMoney(item.amount)}
            />

          <TransactionTile
            tileTitle='LARGE PURCHASES'
            filter='LARGE'
            navigateOnPress={(item) => ['SpendingList', {merchant: item.merchant}] }
            titleMap={(item) => item.merchant}
            subtitleMap={(item) => moment(item.trans_date).format('MMMM Do')}
            valueMap={(item) => '$'+formatMoney(item.amount)}
            />
            


          {/* <TransactionTile
            tileTitle='ALL PURCHASES'
            filter='ALL'
            navigateOnPress={(item) => ['SpendingList', {merchant: item.merchant}] }
            titleMap={(item) => item.merchant}
            subtitleMap={(item) => moment(item.trans_date).format('MMMM Do')}
            valueMap={(item) => '$'+formatMoney(item.amount)}
            /> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
