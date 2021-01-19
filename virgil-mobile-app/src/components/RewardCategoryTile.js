// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'

// Custom imports
import styles from '../styles/RowTile.styles'
import theme, {wp, hp} from '../styles/theme.styles'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'

export default function RewardCategoryTile (props) {

  const dataPending = false

  const tileData = useSelector(state => state.rewardCategoryData)

	return (
		<View style={styles.rowTileContainer}>

      <View style={styles.rowTileTitleContainer}>
				<Text style={styles.rowTileTitle}>BROWSE BY CATEGORY</Text>
			</View>

      <View style={styles.rowTileListContainer}>
        {dataPending ? (
          <ActivityIndicator style={{height: 200}}/>
        ) : (
          <>
            {tileData.map((item, index) =>

              <RewardCategoryRow key={index} data={item} />

            )}
          </>
        )}
      </View>

		</View>
	)
}


import rowStyles from '../styles/Row.styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


function RewardCategoryRow (props) {
  // needs props.data.category

  const rightChevron = require('../static/icons/right-chevron.png')

  const navigation = useNavigation()
  const onPress = () => { navigation.navigate('RewardCategory', {data: props.data}) }

  return (

    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      style={rowStyles.rowContainer}>

      {/* <Image
				style={rowStyles.rowImage}
				source={{uri: S3_URL + 'uber.png'}}
			/> */}

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', flexGrow:1}}>
        <Text style={rowStyles.rowTitle}>{props.data.title}</Text>
        <Image source={rightChevron} style={{height:20, width:10.5}}/>
      </View>

    </TouchableOpacity>
  )
}

