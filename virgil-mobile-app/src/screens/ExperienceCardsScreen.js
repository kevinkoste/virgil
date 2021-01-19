// React/Redux imports 
import React from 'react'
import { View, Text, } from 'react-native'
import { useSelector } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles, { sliderWidth, itemWidth } from '../styles/ExperienceStyles'
import RewardCarousel from '../components/RewardCarousel'

export default function ExperienceCardsScreen({ route, navigation }) {

  // get reward data from state, filter for recommended, and add exit card
  const rewardData = useSelector(state => state.rewardData)
  const experienceData = rewardData.filter(item => item.recommended === true ).concat({exit:true})

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ bottom: 'never' }}>

      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>CHOSEN FOR YOU</Text>
        </View>
      </View>

      <View style={styles.contentContainer} />

      <RewardCarousel data={experienceData}/>

    </SafeAreaView> 
  )
}
