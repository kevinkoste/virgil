// React / Redux imports
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux'
import { selectDateRange } from '../redux/actions'

// Custom imports
import styles from '../styles/Row.styles'
import Modal from 'react-native-modal'

// Utility imports
import moment from 'moment'
import { formatMoney } from '../utils/utils'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'


// required: props.data, props.title, props.subtitle, props.value
export default function TransactionRow (props) {

	// get date range options for dispatch
	const dispatch = useDispatch()

	// get navigation 
	const navigation = useNavigation()

  // define modal states
	const [modalToggle, setModalToggle] = useState(false)
	
	// if navigateOnPress in props, navigates on tap, otherwise show details on tap
	const onPress = ('selectRecent' in props)
		? () => {
			dispatch(selectDateRange(0))
			navigation.navigate(props.navigateOnPress[0], props.navigateOnPress[1])
		} : ('navigateOnPress' in props) ? () => {
			navigation.navigate(props.navigateOnPress[0], props.navigateOnPress[1])
		} : () => { setModalToggle(!modalToggle) }

	return (
		<TouchableOpacity
			style={styles.rowContainer}
			delayPressIn={5}
			activeOpacity={0.4}
			onPress={onPress}
		>
			<Image
				style={styles.rowImage}
				source={{uri: S3_URL + props.data.icon + '.png'}}
			/>
			<View style={styles.rowTitleContainer}>
				<Text numberOfLines={1} style={styles.rowTitle}>{props.title}</Text>
				<Text style={styles.rowSubtitle}>{props.subtitle}</Text>
			</View>
			<Text style={styles.rowAmount}>{props.value}</Text>

			<Modal
				isVisible={modalToggle}
				style={{justifyContent:'center', alignItems:'center'}}
				backdropOpacity={0.8}
				onBackdropPress={onPress}
				>
				<View style={styles.modalContainer}>


					<Image
						style={styles.modalImage}
						source={{uri: S3_URL + props.data.icon + '.png'}}
						/>

					<View style={styles.modalTitleContainer}>
						<Text style={styles.modalTitleText}>{props.data.merchant}</Text>
					</View>

					<TouchableOpacity
						style={styles.modalButtonContainer}
						onPress={() => {
							navigation.navigate('SpendingList', {merchant: props.data.merchant})
							setModalToggle(!modalToggle)
							}}>
						<Text style={[styles.modalExitText, {textTransform: 'uppercase'}]}>See All</Text>
					</TouchableOpacity>

					<View style={styles.modalRowContainer}>
						<Text style={styles.modalRowLabel}>Category</Text>
						<Text style={styles.modalRowText}>{props.data.category}</Text>
					</View>

					<View style={styles.modalRowContainer}>
						<Text style={styles.modalRowLabel}>Date</Text>
						<Text style={styles.modalRowText}>{moment(props.data.trans_date).format('MMMM Do')}</Text>
					</View>

					<View style={styles.modalRowContainer}>
						<Text style={styles.modalRowLabel}>Amount</Text>
						<Text style={styles.modalRowText}>{'$'+formatMoney(props.data.amount)}</Text>
					</View>

					<TouchableOpacity style={styles.modalExitContainer} onPress={onPress}>
						<Text style={styles.modalExitText}>EXIT</Text>
					</TouchableOpacity>
				</View>
			</Modal>

		</TouchableOpacity>
	)
}

