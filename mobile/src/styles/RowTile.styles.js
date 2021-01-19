import { Platform, StyleSheet } from 'react-native';
import theme, {wp, hp} from './theme.styles'

// RowTile styles (for TransactionTile and RewardRowTile)
export default StyleSheet.create({
	rowTileContainer: {
		backgroundColor: '#FFFFFF',
		marginBottom: 7,
		paddingTop: 15,
	},
	rowTileTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '4%',
	},
	rowTileTitle: {
		fontSize: 22,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textAlign: 'left',
	},
	rowTileListContainer: {
		marginTop: 10,
  },
  
	// See More
	seeMoreContainer: {
		height: 50,
		alignSelf: 'stretch',
		justifyContent:'center',
		alignItems: 'stretch',
		marginTop: 4,
	},
	seeMoreText: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textAlign: 'left',
		alignSelf: 'center',
	},
})