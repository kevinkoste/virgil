// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'

// Custom imports
import styles from '../styles/RowTile.styles'
import theme, {wp, hp} from '../styles/theme.styles'

export default function ForYouTile (props) {

  const dataPending = false
  const tileData = [
    {
      title: 'A Show in Brooklyn on Friday',
      text: 'DJ D-Sol is spinning at Avant Gardner this Friday. Grab tickets through RA Guide with credits or cash.',
    },
    {
      title: 'New Coffee Shop Close to the Office',
      text: 'Devocion, a new favorite of ours, just opened a shop near your office. They source and roast Colombian coffee and deliver it to you, all within 10 days. We just added it as a reward - check it out.',
    },
    {
      title: 'Fresh Pair of Kicks from Margiela',
      text: 'Margiela just dropped a new German Army Trainer. We know you have a soft spot - use credits at GOAT.',
    },
    {
      title: 'Purify Your Space with Bloomscape',
      text: 'Margiela just dropped a new German Army Trainer. We know you have a soft spot - use credits at GOAT.',
    },
    {
      title: 'Switch up Your Lunch Routine',
      text: 'Margiela just dropped a new German Army Trainer. We know you have a soft spot - use credits at GOAT.',
    },
  ]

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
	// add special case for categories tile
	const doSeeMoreToggle = () => {
		if (seeMoreToggled) {
			LayoutAnimation.configureNext(tileAnimation)
			setListLimit(3)
			setSeeMoreText('SEE MORE')
			setSeeMoreToggled(false)
		} else {
			LayoutAnimation.configureNext(tileAnimation)
			setListLimit(7)
			setSeeMoreText('SEE LESS')
			setSeeMoreToggled(true)
		}
	}

	return (
		<View style={styles.rowTileContainer}>

      <View style={styles.rowTileTitleContainer}>
				<Text style={styles.rowTileTitle}>FOR YOU</Text>
			</View>

      <View style={styles.rowTileListContainer}>
        {dataPending ? (
          <ActivityIndicator style={{height: 200}}/>
        ) : (
          <>
            {tileData.map((item, index) =>
              <ForYouRow key={index} data={item} />
              ).slice(0,listLimit)}
          </>
        )}
      </View>

      {(tileData.length > 4)
        ? <TouchableOpacity style={styles.seeMoreContainer} onPress={() => doSeeMoreToggle()}>
            <Text style={styles.seeMoreText}>{seeMoreText}</Text>
          </TouchableOpacity>
        : <></>
      }

		</View>
	)
}


function ForYouRow (props) {

  const downChevron = require('../static/icons/down-chevron-black.png')
  const upChevron = require('../static/icons/up-chevron-black.png')

  const [tapped, setTapped] = useState(false)
  const [expanded, setExpanded] = useState(false)

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

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={ () => {
        LayoutAnimation.configureNext(tileAnimation)
        setExpanded(!expanded)
        setTapped(true)
      }}
      style={rowStyles.rowContainer}>

      <View style={{height:40, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
        <Text numberOfLines={1} style={rowStyles.rowTitle}>{props.data.title}</Text>
        {
        // (tapped) ? 
        (expanded)
          ? <Image source={upChevron} style={{height:10.5, width:20}}/>
          : <Image source={downChevron} style={{height:10.5, width:20}}/>
          // : <></>
        }
      </View>
      
      { (expanded)
        ? <View>

            <Text style={rowStyles.rowSubtitle}>{props.data.text}</Text>

            <Text style={[rowStyles.rowSubtitle, {color:theme.TEXT_DARK, marginTop:10, marginBottom:5, textDecorationLine:'underline'}]}>Go To Devocion</Text>

          </View>
        : <></>
      }

    </TouchableOpacity>
  )
}

import { Platform, StyleSheet } from 'react-native'
const rowStyles =  StyleSheet.create({
	rowContainer: {
    paddingHorizontal: '4%',
    marginTop: 5,
	},
	rowTitle: {
		fontSize: 18,
		fontFamily: 'gill-reg',
		marginBottom: 3,
	},
	rowSubtitle: {
		fontSize: 14,
		fontFamily: 'gill-reg',
    color: '#999999',
	},
})