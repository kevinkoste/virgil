// Imports
import { Platform, StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window')

import theme, {wp, hp} from './theme.styles'
import { isIphoneX } from '../utils/utils'

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({
	screenContainer: {
		backgroundColor: theme.BLACK,
		flex: 1,
		flexDirection: 'column',
	},
	headerContainer: {
		height: 97, // this will get overwritten for collapsing headers
		position: 'absolute',
		zIndex: 2,
		overflow: 'hidden',
		left: 0,
		right: 0,
		top:  Platform.OS === 'ios' ? isIphoneX() ? 44 : 20 : 35,
		backgroundColor: theme.BLACK,
		paddingHorizontal: wp(4),
		justifyContent: 'flex-end',
	},
	headerTitleContainer: {
		height: 30,
		flexDirection:'row',
		alignItems:'center',
	},
	headerTitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 30,
		textAlign: 'left',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		paddingRight: wp(6),
	},
	headerSubtitleContainer: {
		height: 52,
		marginBottom: 5,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	headerSubtitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 22,
		textAlign: 'left',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
	},

	// ScrollView styles
	contentContainer: {
		backgroundColor: theme.BACKGROUND_COLOR,
	},
	
	// MerchantSpendingScreen styles
	totalContainer: {
		height: 45,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		borderBottomColor: '#CCCCCC',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	totalText: {
		fontSize: 18,
		fontFamily: 'gill-reg',
		marginLeft: '4%',
	},

	// ExperienceScreen styles
	experienceContainer: {
		backgroundColor: theme.BLACK,
		paddingHorizontal: '20%',
	},
	experienceTitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 30,
		textAlign: 'center',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		marginBottom: 180,
		marginTop: 80,
	},
	experienceSubtitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 20,
		fontFamily: 'gill-reg',
		textAlign: 'center',
		marginBottom: 50,
	},
	experienceButton: {
		justifyContent: 'center',
		backgroundColor: theme.WHITE,
		height: 60,
		marginHorizontal: 32,
	},
	experienceButtonText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 15,
		textAlign: 'center',
	}
})