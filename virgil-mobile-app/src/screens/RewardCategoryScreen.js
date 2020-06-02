// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/ScreenStyles'
import theme, {wp, hp} from '../styles/theme.styles'

import RewardRowTile from '../components/RewardRowTile'
import RewardCardTile from '../components/RewardCardTile'
import HeroImage from '../components/HeroImage'

// required: send {merchant} in route params
export default function RewardCategoryScreen({ route, navigation }) {

  const leftChevron = require('../static/icons/left-chevron.png')

  const careofImage = require('../static/images/careof-hero.png')

  // get merchant from route (button pressed on parent component)
  const { data } = route.params

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ bottom: 'never' }}>
      <View style={[styles.headerContainer, {height:58}]}>

        <View style={[styles.headerTitleContainer, {height:40, overflow:'visible'}]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{top:10, left:10, bottom:10, right:50}}
            >
            <Image
              source={leftChevron}
              style={{height:20, width:10.5, marginRight:12, marginTop:1 }}
            />
          </TouchableOpacity>

          <Text style={[styles.headerTitle]}>{data.title}</Text>
          
        </View>

        <View style={{marginBottom:10}} />

      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
        <View style={{paddingTop:58, flexShrink:1, flexGrow:1}}>

          {/* TEMPORARY, actually link to top image for top reward later */}
          <HeroImage
            merchant={'Care/of'}
            image={careofImage} />

          <RewardCardTile
            title={'TOP IN '+ data.title}
            filter={item => item.category === data.category}
            />

          <RewardRowTile
            title={'ALL REWARDS'}
            filter={item => item.category === data.category}
            />

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

