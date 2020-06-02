// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'

// Custom imports
// import styles from '../styles/RewardTileStyles'
import styles from '../styles/RowTile.styles'
import { rewardPriceToText } from '../utils/utils'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'

// required: send props.filter (active, available, recommended),
export default function RewardRowTile (props) {

	// get currently available transaction data from global state (redux store)
  const rewardData = useSelector(state => state.rewardData)

	// Filter transactionData based on tileType
	const rewardsTileData = rewardData.filter(props.filter)

	return (
		<View style={styles.rowTileContainer}>
			<View style={styles.rowTileTitleContainer}>
				<Text style={styles.rowTileTitle}>{props.title}</Text>
			</View>

			<View style={styles.rowTileListContainer}>
				{rewardsTileData.map(reward =>
						<RewardRow
							key={reward.reward_id}
							data={reward}
						/>
				)}
			</View>

		</View>
	)
}


import rowStyles from '../styles/Row.styles'
import { useNavigation } from '@react-navigation/native'

// send a reward object in props.data
function RewardRow (props) {

  const navigation = useNavigation() 
  const onPress = () => { navigation.navigate('RewardDetail', {data: props.data}) }

  return (
    <TouchableOpacity
      style={rowStyles.rowContainer}
      delayPressIn={5}
      activeOpacity={0.4}
      onPress={onPress}>

      <Image
				style={rowStyles.rowImage}
				source={{uri: S3_URL + props.data.icon + '.png'}}
			/>
			<View style={rowStyles.rowTitleContainer}>
				<Text numberOfLines={1} style={rowStyles.rowTitle}>{props.data.merchant}</Text>
				<Text style={rowStyles.rowSubtitle}>{props.data.reward}</Text>
			</View>

      <View style={rowStyles.boxContainer}>
				<View style={rowStyles.box}>
					<Text style={rowStyles.boxText}>{rewardPriceToText(props.data.price)}</Text>
				</View>
			</View>

    </TouchableOpacity>
  )
}

