// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

// Custom imports
import styles from '../styles/RewardTileStyles'
import RewardCard from './RewardCard'

// required: send props.filter ( an arrow function),
export default function RewardCardTile (props) {

	// get currently available transaction data from global state (redux store)
  const rewardData = useSelector(state => state.rewardData)

	// Filter transactionData based on tileType
	const rewardsTileData = rewardData.filter(props.filter)

	return (
		<View style={styles.rewardTileContainer}>
			<View style={styles.rewardTileTitleContainer}>
				<Text style={styles.rewardTileTitle}>{props.title}</Text>
			</View>

			<ScrollView
				horizontal={true}
				// snapToInterval={200}
				showsHorizontalScrollIndicator={false}>
				<RewardCard
					key = {rewardsTileData[0].reward_id}
					data={rewardsTileData[0]}
					/>
				{rewardsTileData.map(reward =>
					<View key={reward.reward_id} style={{flexDirection:'row', alignItems:'center'}}>
						<ThinLineVertical />
						<RewardCard
							key = {reward.reward_id}
							data={reward}
						/>
					</View>
				).slice(1,rewardsTileData.length)}
			</ScrollView>

		</View>
	)
}

export function ThinLineVertical (props) {
	return <View style={{
		width: 1,
		height: 170,
		backgroundColor: '#CCCCCC',
		borderLeftColor: '#CCCCCC'}} />
}