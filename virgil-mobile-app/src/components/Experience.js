// React/Redux imports 
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { toggleExpanded, toggleConfirmed, activateReward } from '../redux/actions'

import { AnimatedSVGPath } from 'react-native-svg-animations'
import * as Haptics from 'expo-haptics'

// Custom imports
import styles from '../styles/RewardCarousel.styles'
import theme, {wp, hp} from '../styles/theme.styles'
import { rewardPriceToText } from '../utils/utils'
import { useNavigation } from '@react-navigation/native'

export function ExperienceButton (props) {
  // needs props.price, props.navToHome (true if nav to home when out of credits)

  const credits = useSelector(state => state.credits)

  const explosionDuration = 1500
  const confirmationDuration = 1500

  const [buttonEngaged, setButtonEngaged] = useState(false)

  const dispatch = useDispatch()
  const navigation = useNavigation()


  if (!buttonEngaged) {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.7}
        onPress={() => {
          setButtonEngaged(true)
        }}>
        <Text style={[styles.boxText, {color:theme.WHITE}]}>
          ACTIVATE
        </Text>
      </TouchableOpacity>
    )

  } else if (props.price > credits) {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.7}
        onPress={() => {
          setButtonEngaged(false)
        }}>
        <Text style={[styles.boxText, {color:theme.WHITE}]}>
          YOU{(credits == 0) ?' ':' ONLY '}HAVE {rewardPriceToText(credits)} CREDITS
        </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.7}

        onPressIn={() => {
          if (!props.confirmed) props.setExpanding(true)
        }}

        onPressOut={() => {
          if (!props.confirmed) props.setExpanding(false)
        }}

        delayLongPress={explosionDuration}

        onLongPress={() => {
          console.log('onLongPress activated')
          props.setConfirmed(true)

          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then(()=>{})

          setTimeout(() => {
            props.setExpanding(false)
            if (props.price == credits) navigation.navigate('Home')
          }, confirmationDuration)

          setTimeout(() => {
            props.setConfirmed(false)
            props.setExpanding(false)
            dispatch(activateReward(props.price))
          }, confirmationDuration+800)

        }}>

        <Text style={[styles.boxText, {color:theme.WHITE}]}>
          SPEND {rewardPriceToText(props.price)} OF {rewardPriceToText(credits)} CREDITS
        </Text>

      </TouchableOpacity>
    )
  } 
}


export function ExperienceExplosion (props) {
  // needs props.hpFromBottom, props.confirmed, props.expanding

  const circleRadius = hp(200)
  const explosionDuration = 1500
  const contractDuration = 800

  // hacky way to avoid triggering useEffect on initial render
  const [initialRender, setInitialRender] = useState(true)
  const [scaleAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    if (initialRender) {
      console.log('initial render caught')
      setInitialRender(false)
    } else if (props.expanding) {
      console.log('expanding updated to true, expanding now')
      Animated.timing(
        scaleAnim,
        {
          toValue: 1,
          duration: explosionDuration,
          easing: Easing.linear(),
        }
      ).start()
    } else if (!props.expanding) {
      console.log('expanding updated to false, reducing now')
      Animated.timing(
        scaleAnim,
        {
          toValue: 0,
          duration: contractDuration,
          easing: Easing.linear(),
        }
      ).start()
    }
  }, [props.expanding])


  return (
    <>
    <Animated.View
      style={{
        position: 'absolute',
        top: props.hpFromBottom,
        zIndex: 4,
        alignSelf: 'center',
        backgroundColor: theme.BLACK,
        width: circleRadius,
        height: circleRadius,
        borderRadius: circleRadius/2,
        transform: [{scale: scaleAnim}]
      }} />

    { (props.confirmed) ?
      <View style={{
        position:'absolute',
        bottom: hp(40),
        zIndex:5,
        alignSelf:'center',
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center'}}>
        
        <AnimatedSVGPath
          strokeColor={'white'}
          duration={300}
          strokeWidth={2}
          height={50}
          width={50}
          scale={5}
          delay={0}
          d={"M14.1 27.2l7.1 7.2 16.7-16.8"}
          loop={false}/>
        
        <Text style={styles.confirmationText}>REWARD ACTIVATED</Text>

      </View>

      : <></>}
    </>

  )
}