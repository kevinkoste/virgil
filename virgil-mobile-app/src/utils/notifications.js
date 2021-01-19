// OUT-OF-BOX PUSH NOTIFICATIONS FROM EXPO
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import { endpoint } from '../../config'
const pushEndpoint = endpoint + 'users/push-token'

export async function registerForPushNotifications() {
  // only asks if permissions have not already been determined
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

  // stop here if the user did not grant permissions
  if (status !== 'granted') {
    alert('No notification permissions!')
    return
  }

  // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync()

  return axios.post(pushEndpoint, {
    token: token,
    user: 'kevin'
  }).then((response) => {
    // console.log(response)
  }, (error) => {
    // console.log(error)
  })
}

// export function handleNotification() {

//   const navigation = useNavigation()

//   const _handleNotification = (notification) => {

//     navigation.navigate('Experience')

//   }

//   return Notifications.addListener(_handleNotification)
// }