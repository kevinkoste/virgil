// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList,
		ActivityIndicator, UIManager, LayoutAnimation } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

// Custom imports
import styles from '../styles/RowTile.styles'
import TransactionRow from './TransactionRow'
import { filterTransactionData } from '../utils/utils'

// required: send props.filter (recent, large, frequent, categories),
// props.titleMap, props.subtitleMap, props.valueMap
export default function TransactionTile (props) {

	const rightChevron = require('../static/icons/right-chevron.png')
	const navigation = useNavigation()

	// get tile type from props, default to recent
	const tileFilter = ('filter' in props) ? props.filter : 'ALL'

	// get currently available transaction data from global state (redux store)
	const dataPending = useSelector(state => state.transactionDataPending)
	const selectedData = useSelector(state => state.selectedTransactionData)

	// filter selected data based on filter type passed in props, see utils for deets
	const tileData = filterTransactionData(selectedData, tileFilter)

	// Define local states
	const [seeMoreToggled, setSeeMoreToggled] = useState(false)
	const [listLimit, setListLimit] = useState((tileData.length > 4) ? 3 : 4)
	const [seeMoreText, setSeeMoreText] = useState('SEE MORE')

	// Animation stuff
	if (Platform.OS === 'android') {
		if (UIManager.setLayoutAnimationEnabledExperimental) {
			UIManager.setLayoutAnimationEnabledExperimental(true)
		}
	}
	const tileAnimation = LayoutAnimation.create(
		225,
		LayoutAnimation.Types.easeInEaseOut,
		LayoutAnimation.Properties.opacity,
	)

	// Method to toggle see more and see less modes
	// add special case for categories tile
	const doSeeMoreToggle = () => {
		if (seeMoreToggled) {
			LayoutAnimation.configureNext(tileAnimation)
			setListLimit(3)
			setSeeMoreText('SEE MORE')
			setSeeMoreToggled(false)
		} else {
			LayoutAnimation.configureNext(tileAnimation)
			if (props.filter == 'CATEGORIES') {
				setListLimit(12)
			} else {
				setListLimit(7)
			}
			setSeeMoreText('SEE LESS')
			setSeeMoreToggled(true)
		}
	}

	return (
		<View style={styles.rowTileContainer}>

			{	(props.filter == 'CATEGORIES')

			? <View style={styles.rowTileTitleContainer} >
					<Text style={styles.rowTileTitle}>CATEGORIES</Text>
				</View>

			: <TouchableOpacity
					style={styles.rowTileTitleContainer}
					onPress={() => {
						navigation.navigate('SpendingList', {filter: tileFilter})
					}}
					hitSlop={{top:15}}
					>
					<Text style={styles.rowTileTitle}>{props.tileTitle}</Text>
					<Image
						source={rightChevron}
						style={{height:20, width:10.5}}
						/>
				</TouchableOpacity>
			}

		

			<View style={styles.rowTileListContainer}>

				{dataPending ? (
					<ActivityIndicator style={{height: 200}}/>
				) : (
					<>
						{tileData.map((transaction, index) =>
							<TransactionRow
								data={transaction}
								navigateOnPress={props.navigateOnPress(transaction)}
								title={props.titleMap(transaction)}
								subtitle={props.subtitleMap(transaction)}
								value={props.valueMap(transaction)}
								key={index}
								/>
							).slice(0,listLimit)}
					</>
				)}

			</View>

			{ (tileData.length > 4)
				? <TouchableOpacity style={styles.seeMoreContainer} onPress={() => doSeeMoreToggle()}>
						<Text style={styles.seeMoreText}>{seeMoreText}</Text>
					</TouchableOpacity>
			 	: <></>
			}

		</View>
	)
}