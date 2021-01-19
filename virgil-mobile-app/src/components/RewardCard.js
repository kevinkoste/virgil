// Core imports
import React from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { rewardPriceToText } from '../utils/utils'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'

// Custom styles and components
import styles from '../styles/RewardCard.styles'

export default function RewardCard (props) {

	// if navigateOnPress in props, navigates on tap, otherwise show details on tap
	const navigation = useNavigation()
	const onPress = () => { navigation.navigate('RewardDetail', {data: props.data}) }

	return (
		<TouchableOpacity
			style={styles.rewardContainer}
			delayPressIn={10}
			activeOpacity={0.4}
			onPress={onPress}>

      <Image
        style={styles.rewardImage}
        source={{uri: S3_URL + props.data.icon + '.png'}}/>

			<View style={{flexGrow:1, justifyContent:'center'}}>
				<Text style={styles.rewardTitle}>{props.data.reward}</Text>
				<Text style={styles.rewardSubtitle}>{props.data.merchant}</Text>
			</View>

			<View style={styles.boxContainer}>
				<View style={styles.box}>
					<Text style={styles.boxText}>{rewardPriceToText(props.data.price)}</Text>
				</View>
			</View>

		</TouchableOpacity>
	)
}


