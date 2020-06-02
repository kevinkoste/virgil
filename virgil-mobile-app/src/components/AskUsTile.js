// React/Redux imports 
import React, { useState } from 'react'
import { View, Text, TextInput, LayoutAnimation, TouchableOpacity } from 'react-native'

// Custom imports
import styles from '../styles/RowTile.styles'
import theme, {wp, hp} from '../styles/theme.styles'

export default function AskUsTile (props) {

	return (
    
		<View style={styles.rowTileContainer}>

			<View style={[styles.rowTileTitleContainer, {marginTop:7}]}>
				<Text style={styles.rowTileTitle}>TALK TO US</Text>
			</View>

      <TextInput
        style={{
          backgroundColor: theme.WHITE,
          borderBottomWidth: 1,
          height: 30, 
          marginHorizontal: '4%',
          paddingHorizontal: 0,
          marginTop: 10,
          marginBottom: 30,
          fontSize: 14,
          fontFamily: theme.FONT_REGULAR,
          color: theme.TEXT_DARK,
        }}
        placeholder='How can we help?'
        returnKeyType='send'
        onSubmitEditing={(text, eventCount, target) => {}}
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
      />

		</View>
	)
}
