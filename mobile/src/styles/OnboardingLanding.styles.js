// Imports
import { Platform, StyleSheet, Dimensions } from 'react-native';
import theme, {wp, hp} from './theme.styles'

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({
	screenContainer: {
		backgroundColor: theme.WHITE,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	headerContainer: {
		backgroundColor: theme.WHITE,
		height: 80,
		marginTop: Platform.OS === 'ios' ? 10 : 25,
		marginBottom: '2%',
    paddingHorizontal: '4%',
	},
	headerTitleContainer: {
    alignItems:'center',
		marginBottom: 9,
	},
	headerTitle: {
		fontFamily: theme.FONT_REGULAR,
    color: theme.BLACK,    
    textAlign: 'center',
		fontSize: 30,
		letterSpacing: 1.5,
		textTransform: 'uppercase',
	},
	
	// Content styles
	contentContainer: {
		justifyContent: 'space-between',
		backgroundColor: theme.WHITE,
		paddingHorizontal: 16,
	},
	title: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 30,
		textAlign: 'left',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
	},
	subtitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 20,
		fontFamily: 'gill-reg',
		textAlign: 'left',
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

})