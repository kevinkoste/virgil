// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from 'react-redux'

// Custom imports
import styles from '../styles/BarChart.styles'
import { formatMoney } from '../utils/utils'

import BarChart from './BarChart'

export default function BarChartTile (props) {

  const rightChevron = require('../static/icons/right-chevron.png')
  const navigation = useNavigation()

  const selectedData = useSelector(state => state.selectedTransactionData)
  const totalInRange = selectedData.reduce((prev, next) => prev + next.amount, 0)

  return (

    <View style={styles.barChartTileContainer} >
      <TouchableOpacity
        style={styles.barChartTitleContainer}
        activeOpacity={0.7}
        hitSlop={{top:15}}
        onPress={() => {
          navigation.navigate('SpendingList', {})
        }}>

        <Text style={styles.barChartTitle}>HISTORY</Text>

        <View style={{alignItems:'flex-end'}} >
          <Text style={styles.barChartTotalText}>${formatMoney(totalInRange, 0)}</Text>
          <Text style={styles.barChartTotalSubtext}>Spent</Text>
        </View>

        <Image
          source={rightChevron}
          style={{height:20, width:10.5, marginLeft:8, marginTop:3}}
          />

      </TouchableOpacity>

      <BarChart /> 

    </View>
  )
}
