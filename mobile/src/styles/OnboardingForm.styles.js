// Imports
import { Platform, StyleSheet, Dimensions } from 'react-native';
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
		justifyContent: 'center',
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

	// View styles
	contentContainer: {
		flex: 1,
		backgroundColor: theme.WHITE,
	},

	button: {
		justifyContent: 'center',
		backgroundColor: theme.BLACK,
		height: 60,
		marginHorizontal: 16,
	},
	buttonText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 15,
		textAlign: 'center',
	},

	textInputContainer: {
		backgroundColor: theme.WHITE,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		height: 45,
		marginTop: 30,
		marginBottom: 30,
	},
	
	textInput: {
		flex: 1,
		paddingHorizontal: 16,
		textAlign: 'left',

		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_DARK,
	}

})