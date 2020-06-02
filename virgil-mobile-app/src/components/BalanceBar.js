// React/Redux imports 
import React, { useState } from 'react'
import { Dimensions, View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';

// react-native-svg imports
import Svg, { Rect } from 'react-native-svg'

// Custom imports
import styles from '../styles/BalanceBarStyles'

export default function BalanceBar (props) {

	var { height, width } = Dimensions.get('window');

	const spent = 1100
	const limit = 2500
	const barWidth = width - 32
	const blackBarWidth = (spent/limit)*barWidth

	return (
		<View style={styles.balanceBarContainer} >
			<View style={styles.balanceBarTitleContainer}>
				<Text style={styles.balanceBarTitle}>{props.title}</Text>
			</View>
			<View style={styles.svgContainer}>
				<Svg width={barWidth} height={21} >
					<Rect
						width={barWidth}
						height={21}
						fill='#E4E4E4'
					/>
					<Rect
						width={blackBarWidth}
						height={21}
						fill='#121212'
					/>
				</Svg>
			</View>
			<View style={styles.balanceBarTextContainer}>
				<Text style={styles.balanceBarText} >$1,137 / 2,500</Text>
				<Text style={styles.balanceBarText} >13 Days</Text>
			</View>
			<View style={[styles.balanceBarTextContainer, {marginBottom: 15}]}>
				<Text style={styles.balanceBarSubtext} >Spent this month</Text>
				<Text style={styles.balanceBarSubtext} >Till month end</Text>
			</View>
		</View>



	)






	// const spent = 1500
	// const limit = 2500

	// const data = [spent/limit]

	// return (
	// 	<View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
	// 		<BarChart
	// 			style={{ flex: 1, marginLeft: 8 }}
	// 			data={data}
	// 			horizontal={true}
	// 			svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
	// 			contentInset={{ top: 10, bottom: 10 }}
	// 			spacing={0.2}
	// 			gridMin={0}
	// 		 />
	// 	</View>
	// )
}