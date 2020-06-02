// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import styles from '../styles/AccountTile.styles'

export default function AccountTile (props) {

  const cardImage = require('../static/images/sample-card.png')
  const rightChevron = require('../static/icons/right-chevron.png')

  return (
    <View style={styles.tileContainer}>
      <Image
        style={styles.cardImage}
        source={cardImage} />

      <TouchableOpacity style={styles.rowContainer}>
        <Text style={styles.rowText}>About Me</Text>
        <Image
          style={styles.rightChevron}
          source={rightChevron}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowContainer}>
        <Text style={styles.rowText}>Reward Profile</Text>
        <Image
          style={styles.rightChevron}
          source={rightChevron}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowContainer}>
        <Text style={styles.rowText}>Card & App Settings</Text>
        <Image
          style={styles.rightChevron}
          source={rightChevron}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowContainer}>
        <Text style={styles.rowText}>Statements</Text>
        <Image
          style={styles.rightChevron}
          source={rightChevron}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowContainer}>
        <Text style={styles.rowText}>Support</Text>
        <Image
          style={styles.rightChevron}
          source={rightChevron}/>
      </TouchableOpacity>


  </View>
  )

}
