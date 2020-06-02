// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,
		ActivityIndicator, UIManager, LayoutAnimation } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { selectDateRange } from '../redux/actions'

// Custom imports
import styles from '../styles/RowTile.styles'
import TransactionRow from './TransactionRow'
import { useNavigation } from '@react-navigation/native'

// required: send props.filter (recent, large, frequent),
// props.titleMap, props.subtitleMap, props.valueMap
export default function TransactionTileRecent (props) {

	const rightChevron = require('../static/icons/right-chevron.png');

	// get currently available transaction data from global state (redux store)
	const dataPending = useSelector(state => state.transactionDataPending)
	const allData = useSelector(state => state.transactionData)

  // filter all transactions for this month only... lol just send allData for now
  const tileData = allData
  
  // hooks baby
  const dispatch = useDispatch()
  const navigation = useNavigation()

	// Define local states
	const [seeMoreToggled, setSeeMoreToggled] = useState(false)
	const [listLimit, setListLimit] = useState(3)
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
	const doSeeMoreToggle = () => {
		if (seeMoreToggled) {
			LayoutAnimation.configureNext(tileAnimation)
			setListLimit(3)
			setSeeMoreText('SEE MORE')
			setSeeMoreToggled(false)
		} else {
			LayoutAnimation.configureNext(tileAnimation)
			setListLimit(8)
			setSeeMoreText('SEE LESS')
			setSeeMoreToggled(true)
		}
	}

	return (
		<View style={[styles.rowTileContainer, {marginTop:7}]}>

			<TouchableOpacity
				style={styles.rowTileTitleContainer}
        onPress={() => {
          dispatch(selectDateRange(0))
          navigation.navigate('SpendingList', {})
        }}
				hitSlop={{top:15}}
				>
				<Text style={styles.rowTileTitle}>{props.tileTitle}</Text>
				<Image
					source={rightChevron}
					style={{height:20, width:10.5}}
					/>
			</TouchableOpacity>

			<View style={styles.rowTileListContainer}>

				{dataPending ? (
					<ActivityIndicator style={{height: 196}}/>
				) : (
					<>
						{tileData.map((transaction, index) =>
							<TransactionRow
								data={transaction}
                navigateOnPress={props.navigateOnPress(transaction)}
                selectRecent={true}
								title={props.titleMap(transaction)}
								subtitle={props.subtitleMap(transaction)}
								value={props.valueMap(transaction)}
								key={index}
								/>
							).slice(0,listLimit)}
					</>
				)}

			</View>

			<TouchableOpacity style={styles.seeMoreContainer} onPress={() => doSeeMoreToggle()}>
				<Text style={styles.seeMoreText}>{seeMoreText}</Text>
			</TouchableOpacity>

		</View>
	)
}