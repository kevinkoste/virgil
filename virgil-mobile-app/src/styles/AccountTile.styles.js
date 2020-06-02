// Imports
import { Platform, StyleSheet } from 'react-native';

import theme, {wp, hp} from '../styles/theme.styles'

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({

  tileContainer: {
    backgroundColor:theme.WHITE,
    paddingBottom: 40,
    marginBottom: 7,
  },

  cardImage: {
    width: wp(85),
    height: wp(85) * 0.6363,
    alignSelf:'center',
    marginTop: 35,
    marginBottom: 5,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(4),
    marginTop: 40,
  },

  rowText: {
    fontSize: 18,
		fontFamily: theme.FONT_REGULAR,
  },

  rightChevron: {
    height: 20,
    width: 10.5,
  },

})