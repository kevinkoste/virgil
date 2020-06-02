// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Custom imports
import styles from '../styles/ExperienceStyles'

// required: send {merchant} in route params
export default function ExperienceScreen({ route, navigation }) {

  return (
    <SafeAreaView
      style={[styles.screenContainer,{justifyContent: 'center'}]}
      forceInset={{ bottom: 'never' }}>

      <View style={styles.experienceContainer}>

        <Text style={styles.experienceTitle}>
          REWARD AVAILABLE
        </Text>

        <Text style={styles.experienceSubtitle}>
          You've earned a new reward, bringing your total reward balance to three.
        </Text>

      </View>

      <TouchableOpacity
        onPress= {() => {navigation.navigate('ExperienceCards')}}
        style={styles.experienceYesButton}>
          <Text style={styles.experienceButtonText}>SEE RECOMMENDED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress= {() => {navigation.navigate('Rewards')}}
        style={styles.experienceNoButton}>
          <Text style={[styles.experienceButtonText, {color:'#FFFFFF'}]}>SAVE FOR LATER</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

