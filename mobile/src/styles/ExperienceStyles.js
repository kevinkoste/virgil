// Imports
import { Platform, StyleSheet, Dimensions } from 'react-native';
import theme, {wp, hp} from './theme.styles'

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({
	screenContainer: {
		backgroundColor: theme.BLACK,
		flex: 1,
		flexDirection: 'column',
		// alignItems: 'center',
	},
	headerContainer: {
		backgroundColor: theme.BLACK,
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
    color: theme.WHITE,    
    textAlign: 'center',
		fontSize: 30,
		letterSpacing: 1.5,
		textTransform: 'uppercase',
	},

	// ScrollView styles
	contentContainer: {
    flex:1,
    backgroundColor: theme.BLACK,
		justifyContent: 'flex-end',
	},
	
	// ExperienceScreen styles
	experienceContainer: {
		backgroundColor: theme.BLACK,
		paddingHorizontal: 55,
	},
	experienceTitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 30,
		textAlign: 'center',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		marginBottom: 120,
		marginTop: 50,
	},
	experienceSubtitle: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 20,
		fontFamily: 'gill-reg',
		textAlign: 'center',
		marginBottom: 25,
	},
	experienceYesButton: {
		justifyContent: 'center',
		backgroundColor: theme.WHITE,
		height: 60,
		marginHorizontal: 32,
		marginBottom: 15,
	},
	experienceNoButton: {
		justifyContent: 'center',
		backgroundColor: theme.BLACK,
		borderColor: theme.WHITE,
		borderWidth: 1,
		height: 60,
		marginHorizontal: 32,
	},
	experienceButtonText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 15,
		textAlign: 'center',
  },
  
  saveForLaterContainer: {
		height: wp(10),
		justifyContent: 'center',
		alignItems: 'center'
	},
	saveForLaterText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 15,
		textAlign: 'center',
	},

})