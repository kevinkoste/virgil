// React/Redux imports 
import React, { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import theme, {wp, hp} from '../styles/theme.styles'

export default function HeroImage (props) {
  // get merchant and image in props

  const rewardData = useSelector(state => state.rewardData)
  const data = rewardData.find(item => item.merchant == props.merchant)

  const navigation = useNavigation()
  const onPress = () => { navigation.navigate('RewardDetail', {data: data}) }

  return (
    <TouchableOpacity
      style={{marginBottom:7}}
      activeOpacity={1}
      onPress={onPress}>
      <Image
        source={props.image}
        style={{width:wp(100), height:wp(100)}}
        />
  </TouchableOpacity>
  )
}