// React/Redux imports 
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

// Custom imports
import styles from '../styles/RewardDetail.styles'
import theme, {wp, hp} from '../styles/theme.styles'
import { rewardPriceToText } from '../utils/utils'
import RewardCardTile from '../components/RewardCardTile'
import { ExperienceButton, ExperienceExplosion } from '../components/Experience'

// Icon endpoint
import { S3_URL } from 'react-native-dotenv'


// required: send {merchant} in props, maybe change this to 
export default function RewardDetail( props ) {

  // get data from state
  const rewardData = useSelector(state => state.rewardData)

	// Filter transactionData based on tileType
  const data = rewardData.find(item => item.merchant == props.merchant)

  return (
    <View style={{backgroundColor: theme.DARK_GRAY, flexShrink:1, paddingTop:97}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: theme.WHITE, marginBottom:7}}>
          <Image
            style={styles.cardImage}
            source={{uri: S3_URL + data.icon + '.png'}}
            />

          <Text style={styles.cardTitle}>{data.reward}</Text>

          {/* <Text style={styles.cardTitle}>{data.merchant}</Text>
          <Text style={styles.cardSubtitle}>{data.reward}</Text> */}

          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.boxSmallText}>${data.value}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxSmallText}>{rewardPriceToText(data.price)}</Text>
            </View>
          </View>

          {(data.reward_description != '')
            ? <View style={styles.textContainer}>
                <Text style={styles.sectionTitle}>About The Reward: {data.reward}</Text>
                <Text style={styles.sectionText}>{data.reward_description}</Text>
              </View>
            : <></>
          }

          {(data.our_opinion != '')
            ? <View style={styles.textContainer}>
                <Text style={styles.sectionTitle}>Why We Love {data.merchant}</Text>
                <Text style={styles.sectionText}>{data.our_opinion}</Text>
              </View>
            : <></>
          }

          {(data.quote != '')
            ? <View style={[styles.textContainer, {alignItems:'center'}]}>
                <Text style={styles.quoteText}>"{data.quote}"</Text>
                <Text style={styles.quoteAuthorText}>{data.quoteAuthor}</Text>
              </View>
            : <></>
          }

          {(data.about_merchant != '')
            ? <View style={styles.textContainer}>
                <Text style={styles.sectionTitle}>About {data.merchant}</Text>
                <Text style={styles.sectionText}>{data.about_merchant}</Text>
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


      <View style={styles.buttonContainer}>

        <ExperienceButton price={data.price} />

      </View>
      
    </View>
  )
}

