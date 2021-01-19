// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Animated, Easing } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { ExperienceButton, ExperienceExplosion } from './Experience'
import { rewardPriceToText } from '../utils/utils'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'

// Custom imports
import styles, { cardWidth, sliderWidth, itemWidth } from '../styles/RewardCarousel.styles'
import theme, {wp, hp} from '../styles/theme.styles'


export default function RewardCarousel (props) {
  // gets props.data

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  
  // defining these states here to be used by children
  const [expanding, setExpanding] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  return (
    <View style={{position: 'absolute', top:hp(14)}}>
      <Carousel
        data={props.data}
        renderItem={( {item} ) =>
          <CarouselItem
            data={item}
            expanding={expanding} setExpanding={setExpanding}
            confirmed={confirmed} setConfirmed={setConfirmed}
          />
        }

        
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.9}
        onSnapToItem={(index) => setActiveSlideIndex(index) }
        useScrollView={true}
        />
      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={activeSlideIndex}
        containerStyle={{alignItems:'flex-end', marginRight:10}}

        dotContainerStyle={
          {height:3, width: cardWidth/props.data.length, backgroundColor:theme.WHITE}}

        dotElement={<View style={
          {height:3, width: cardWidth/props.data.length, backgroundColor:theme.BLACK}}/>}

        inactiveDotElement={<View style={
          {height:1, width:cardWidth/props.data.length, backgroundColor:theme.BLACK}}/>}

        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        animatedDuration={0}
        />


      <ExperienceExplosion
        hpFromBottom={-hp(30.5)}
        expanding={expanding}
        confirmed={confirmed}
        />

    </View>
  )
}

// each item gets props: merchant, icon, reward, value, price, message, description
// also getting all of the state manipulation functions in props
// would be nice to move state stuff (and Explosion here.... ahh!!!)
function CarouselItem (props) {


  if ('exit' in props.data) {
    const navigation = useNavigation()
    return (
      <View style={[styles.cardContainer, {justifyContent:'space-between'}]}>

        <View contentContainerStyle={{alignItems: 'center'}}>
          <Text style={[styles.cardTitle, {marginTop:180}]}>
            Looking for Something Else?
          </Text>
        </View>
        
        <TouchableOpacity
          onPress= {() => {navigation.navigate('Home')}}
          style={styles.saveForLaterButton}>
          <Text style={[styles.boxText, {color:theme.WHITE}]}>
            SAVE FOR LATER
          </Text>
        </TouchableOpacity>

      </View>
    )

  } else {

    return (
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Image
            style={styles.cardImage}
            source={{uri: S3_URL + props.data.icon + '.png'}}
          />
  
          <Text style={styles.cardTitle}>{props.data.reward}</Text>
  
          <Text style={styles.cardSubtitle}>{props.data.merchant}</Text>
  
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.boxText}>${props.data.value}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>{rewardPriceToText(props.data.price)}</Text>
            </View>
          </View>
  
          <View style={styles.textContainer}>
            <Text style={styles.cardSectionTitle}>Why It's For You</Text>
            <Text style={styles.cardText}>{props.data.recommended_text}</Text>
            <Text style={styles.cardSectionTitle}>Why We Love {props.data.merchant}</Text>
            <Text style={styles.cardText}>{props.data.our_opinion}</Text>
          </View>
        </ScrollView>
        
        <ExperienceButton
          price={props.data.price}
          expanding={props.expanding} setExpanding={props.setExpanding}
          confirmed={props.confirmed} setConfirmed={props.setConfirmed}
          />

      </View>
    )
  }
}


