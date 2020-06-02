// React imports
import React from 'react'
import { Image } from 'react-native'

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Main Tab Navigator screens
import HomeScreen from '../screens/HomeScreen'
import SpendingScreen from '../screens/SpendingScreen'
import RewardsScreen from '../screens/RewardsScreen'
import AccountScreen from '../screens/AccountScreen'

// Experience screens
import ExperienceLandingScreen from '../screens/ExperienceLandingScreen'
import ExperienceCardsScreen from '../screens/ExperienceCardsScreen'

// Details screens
import SpendingListScreen from '../screens/SpendingListScreen'
import RewardDetailScreen from '../screens/RewardDetailScreen'
import RewardCategoryScreen from '../screens/RewardCategoryScreen'

// Card Link screen
import CardLinkScreen from '../auth/CardLinkScreen'


// Main Tab Navigator
const MainTab = createBottomTabNavigator()
function MainTabScreen() {
  return (
    <MainTab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const tabBarIcons =
            focused ? {
              home: require('../static/icons/home-tab-icon-selected.png'),
              rewards: require('../static/icons/rewards-tab-icon-selected.png'),
              spending: require('../static/icons/spending-tab-icon-selected.png'),
              account: require('../static/icons/account-tab-icon-selected.png')
            } : {
              home: require('../static/icons/home-tab-icon.png'),
              rewards: require('../static/icons/rewards-tab-icon.png'),
              spending: require('../static/icons/spending-tab-icon.png'),
              account: require('../static/icons/account-tab-icon.png')
            }
          const icon = (route.name === 'Home') ? tabBarIcons.home
            : (route.name === 'Rewards') ? tabBarIcons.rewards
            : (route.name === 'Spending') ? tabBarIcons.spending
            : tabBarIcons.account
          return <Image source={icon} style={{ width:25, height:25 }}/>
        },
      })}
      tabBarOptions={{showLabel: false}}>
      <MainTab.Screen name='Home' component={HomeScreen} />
      <MainTab.Screen name='Spending' component={SpendingScreen} />
      <MainTab.Screen name='Rewards' component={RewardsScreen} />
      <MainTab.Screen name='Account' component={AccountScreen} />
    </MainTab.Navigator>
  )
}

// Experience Stack Navigator
const ExperienceStack = createStackNavigator();
function ExperienceStackScreen() {
  return (
    <ExperienceStack.Navigator headerMode={'none'}>
      <ExperienceStack.Screen name='ExperienceLanding' component={ExperienceLandingScreen} />
      <ExperienceStack.Screen name='ExperienceCards' component={ExperienceCardsScreen} />
    </ExperienceStack.Navigator>
  )
}

// Root Stack Navigator with several Navigator children
const RootStack = createStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none'>

        <RootStack.Screen name='Main' component={MainTabScreen} />
        <RootStack.Screen name='SpendingList' component={SpendingListScreen} />
        <RootStack.Screen name='RewardDetail' component={RewardDetailScreen} />
        <RootStack.Screen name='RewardCategory' component={RewardCategoryScreen} />

        <RootStack.Screen name='Experience' component={ExperienceStackScreen} />

        <RootStack.Screen name='CardLink' component={CardLinkScreen} />

      </RootStack.Navigator>
    </NavigationContainer>
  )
}