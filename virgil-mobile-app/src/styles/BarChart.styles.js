import { Platform, StyleSheet } from 'react-native'

import theme, {wp, hp} from '../styles/theme.styles'

// TransactionTile styles
export default StyleSheet.create({
  
  barChartTileContainer: {
		paddingTop: 22,
		backgroundColor: '#FFFFFF',
		paddingBottom: 15,
	},
	barChartTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: '4%',
	},

	barChartTitle: {
		fontSize: 22,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textAlign: 'left',
		flexGrow: 1,
	},

	barChartTotalText: {
		fontSize: 18,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
	},

	barChartTotalSubtext: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		color: theme.TEXT_LIGHT,
		marginRight: 2,
	},

	rowSubtitle: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		color: '#121212',
		marginTop: 8,
		marginBottom: 3,
	},
  
})