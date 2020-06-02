// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useSelector } from 'react-redux'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'

// Custom styles and components
import styles from '../styles/ScreenStyles'
import detailStyles from '../styles/RewardDetail.styles'

import theme, {wp, hp} from '../styles/theme.styles'
import { ExperienceButton, ExperienceExplosion } from '../components/Experience'
import { rewardPriceToText } from '../utils/utils'
import RewardCardTile from '../components/RewardCardTile'


// required: send {data} in route params
export default function RewardDetailScreen({ route, navigation }) {

  // get merchant from route (button pressed on parent component)
  const { data } = route.params

  const leftChevron = require('../static/icons/left-chevron.png')

  const categoryData = useSelector(state => state.rewardCategoryData)
  const categoryTitle = categoryData.find(item => item.category === data.category).title

  return (
    <SafeAreaView style={styles.screenContainer} forceInset={{ bottom: 'never' }}>
      <View style={styles.headerContainer}>

        <View style={styles.headerTitleContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{top:10, left:10, bottom:10, right:50}}
            >
            <Image
              source={leftChevron}
              style={{height:20, width:10.5, marginRight:12, marginTop:4 }}
            />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.headerTitle}>{data.merchant}</Text>
        </View>

        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>{categoryTitle}</Text>
        </View>
      </View>

      <ScrollView
        style={[styles.contentContainer, {paddingTop:97}]}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:theme.WHITE, marginBottom:97+7}}>

          <Image
            style={detailStyles.cardImage}
            source={{uri: S3_URL + data.icon + '.png'}}
            />

          <Text style={detailStyles.cardTitle}>{data.reward}</Text>

          <View style={detailStyles.boxContainer}>
            <View style={detailStyles.box}>
              <Text style={detailStyles.boxSmallText}>${data.value}</Text>
            </View>
            <View style={detailStyles.box}>
              <Text style={detailStyles.boxSmallText}>{rewardPriceToText(data.price)}</Text>
            </View>
          </View>

          {(data.reward_description != '')
            ? <View style={detailStyles.textContainer}>
                <Text style={detailStyles.sectionTitle}>About The Reward: {data.reward}</Text>
                <Text style={detailStyles.sectionText}>{data.reward_description}</Text>
              </View>
            : <></>
          }

          {(data.our_opinion != '')
            ? <View style={detailStyles.textContainer}>
                <Text style={detailStyles.sectionTitle}>Why We Love {data.merchant}</Text>
                <Text style={detailStyles.sectionText}>{data.our_opinion}</Text>
              </View>
            : <></>
          }

          {(data.quote != '')
            ? <View style={[detailStyles.textContainer, {alignItems:'center'}]}>
                <Text style={detailStyles.quoteText}>"{data.quote}"</Text>
                <Text style={detailStyles.quoteAuthorText}>{data.quoteAuthor}</Text>
              </View>
            : <></>
          }

          {(data.about_merchant != '')
            ? <View style={detailStyles.textContainer}>
                <Text style={detailStyles.sectionTitle}>About {data.merchant}</Text>
                <Text style={detailStyles.sectionText}>{data.about_merchant}</Text>
              </View>
            : <View style={{height: 30}} />
          }


          {/* <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>About {data.merchant}</Text>
            <Text style={styles.sectionText}>{data.about_merchant}</Text>
          </View> */}

          {/* <View style={styles.textRowContainer}>
            <Text style={[styles.sectionText, {color:theme.BLACK}]}>Category</Text>
            <Text style={styles.sectionText}>{data.reward}</Text>
          </View>

          <View style={styles.textRowContainer}>
            <Text style={[styles.sectionText, {color:theme.BLACK}]}>Website</Text>
            <Text style={[styles.sectionText,
              {textDecorationLine:'underline'}]}>Link</Text>
          </View> */}


          <RewardCardTile
            title='YOU MIGHT ALSO LIKE'
            filter={item => item.category === data.category}
            />

        </View>
      </ScrollView>


      <View style={detailStyles.buttonContainer}>

        <ExperienceButton price={data.price} />

      </View>

      <ExperienceExplosion hpFromBottom={-hp(7)} />

    </SafeAreaView>
  )
}

