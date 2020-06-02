// React/Redux imports 
import React, { useState, useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Animated, Image } from 'react-native'
import { useSelector } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'
import { useNavigation } from '@react-navigation/native'

// Custom imports
import styles from '../styles/ScreenStyles'
import { rewardPriceToText } from '../utils/utils'

import RewardCardTile from '../components/RewardCardTile'
import RewardCategoryTile from '../components/RewardCategoryTile'
import HeroImage from '../components/HeroImage'

export default function RewardsScreen({ route, navigation }) {

  const credits = useSelector(state => state.credits)

  const hausImage = require('../static/images/haus-hero.png')
  const sweetgreenImage = require('../static/images/sweetgreen-hero.png')
  const careofImage = require('../static/images/careof-hero.png')
  const residentadvisorImage = require('../static/images/residentadvisor-hero.png')

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
          <Text style={styles.headerTitle}>Rewards</Text>
        </View>
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>
            {rewardPriceToText(credits)} credit{(credits == 1) ? '' : 's'} available
          </Text>
        </View>
      </Animated.View>

      <ScrollView
        style={styles.contentContainer}
        scrollIndicatorInsets={{top:97}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: scrollOffsetY }}} ]) }
        scrollEventThrottle={8}>
        <View style={{paddingTop:maxHeight}}>


          <RewardCardTile
            title='NEW THIS MONTH'
            filter={item => item.new === true} />
          <HeroImage
            merchant={'Haus'}
            image={hausImage} />

          <RewardCardTile
            title='TOP IN QUICK EATS'
            filter={item => item.category === 'quickeats'} />
          <HeroImage
            merchant={'Sweetgreen'}
            image={sweetgreenImage} />

          <RewardCardTile
            title='TOP IN ENTERTAINMENT'
            filter={item => item.category === 'entertainment'} />
          <HeroImage
            merchant={'RA Guide'}
            image={residentadvisorImage} />

          {/* <RewardCardTile
            title='POPULAR IN WELLNESS'
            filter={item => item.category === 'wellness'} />
          <HeroImage
            merchant={'Care/of'}
            image={careofImage} /> */}

          <RewardCategoryTile />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

