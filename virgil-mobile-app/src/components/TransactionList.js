// React imports 
import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

// Redux imports
import { useSelector } from 'react-redux'

// Custom imports
import styles from '../styles/TransactionListStyles'
import TransactionRow from './TransactionRow'

// required: props.data, props.titleMap, props.subtitleMap, props.valueMap
export default function TransactionList (props) {

	const dataPending = useSelector(state => state.transactionDataPending)

	if (dataPending) {
		return (
			<View style={{backgroundColor:'#151515', height:'100%'}}>
				<ActivityIndicator style={{height: 196}}/>
			</View>
		)
	} else {
		return (
			<FlatList
			contentContainerStyle={styles.transactionList}
			data={props.data}
			keyExtractor={transaction => transaction.trans_id}
			renderItem={({item}) =>
				<TransactionRow
					data={item}
					title={props.titleMap(item)}
					subtitle={props.subtitleMap(item)}
					value={props.valueMap(item)}
					/>
			}
			scrollEnabled={true}
			style={{backgroundColor:'#E0E0E0'}}
		/>
		)
	}
}



