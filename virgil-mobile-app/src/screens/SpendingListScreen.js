// React/Redux imports 
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import {useSelector} from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'

// Custom components
import styles from '../styles/ScreenStyles'
import TransactionList from '../components/TransactionList'
import DatePicker from '../components/DatePicker'

// Utilities
import moment from 'moment'
import { formatMoney, spendingCountToText } from '../utils/utils'
import { filterTransactionData } from '../utils/utils'

// required: send {merchant} in route params
export default function SpendingListScreen({ route, navigation }) {

  const leftChevron = require('../static/icons/left-chevron.png');

  // get currently available transaction data from global state (redux store)
	const selectedData = useSelector(state => state.selectedTransactionData)

  // check what type of screen we are on and filter data accordingly
  const listData = ('merchant' in route.params)
    ? selectedData
        .filter(transaction => transaction.merchant === route.params.merchant)
        .sort((a, b) => new Date(b.trans_date) - new Date(a.trans_date))
    : ('category' in route.params)
    ? selectedData
        .filter(transaction => transaction.category === route.params.category)
        .sort((a, b) => new Date(b.trans_date) - new Date(a.trans_date))
    : ('filter' in route.params)
    ? filterTransactionData(selectedData, route.params.filter)
    : selectedData

  const listTitle = ('merchant' in route.params)
  ? route.params.merchant
  : ('category' in route.params)
  ? route.params.category
  : ('filter' in route.params)
  ? route.params.filter
  : 'ALL SPENDING'

  const totalInRange = listData.reduce((prev, next) => prev + next.amount, 0)
  const countInRange = listData.length

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ bottom: 'never' }}>
      <View style={styles.headerContainer}>

        <View style={styles.headerTitleContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{top:10, left:10, bottom:10, right:50}}
            >
            <Image
              source={leftChevron}
              style={{height:20, width:10.5, marginRight:12, marginTop:4 }}
            />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.headerTitle}>{listTitle}</Text>
        </View>

        <View style={styles.headerSubtitleContainer}>
          <DatePicker />
        </View>

      </View>

      <View style={{paddingTop:97, flexShrink:1, flexGrow:1}}>
        <View style={styles.totalContainer}>
          { (countInRange == 1)
            ? <Text style={styles.totalText}>
                ${formatMoney(totalInRange)} Spent on {spendingCountToText(countInRange)} Purchase
              </Text>
            : <Text style={styles.totalText}>
                ${formatMoney(totalInRange)} Spent on {spendingCountToText(countInRange)} Purchases
              </Text>
          }
        </View>

        <TransactionList
          data={listData}
          titleMap={(item) => moment(item.trans_date).format('MMMM Do')}
          subtitleMap={(item) => item.merchant}
          valueMap={(item) => '$'+formatMoney(item.amount)}
          />
      </View>

    </SafeAreaView>
  )
}

