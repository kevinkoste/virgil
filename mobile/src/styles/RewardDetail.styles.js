// Imports
import { Platform, StyleSheet, } from 'react-native';
import theme, {wp, hp} from './theme.styles'
import { isIphoneX } from '../utils/utils'

export const cardWidth = wp(92)
const cardHeight = hp(77)
const cardHorizontalMargin = wp(1)
export const sliderWidth = wp(100)
export const itemWidth = cardWidth + cardHorizontalMargin * 2

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({

	// carousel card styles
	cardContainer: {
		height: cardHeight,
		width: cardWidth,
		marginHorizontal: cardHorizontalMargin,
		backgroundColor: theme.WHITE,
		alignItems: 'center',
	},

	cardImage: {
		width: 95,
		height: 95,
		marginTop: 30,
		alignSelf: 'center',
	},

	cardTitle: {
		fontSize: 24,
		fontFamily: theme.FONT_REGULAR,
		letterSpacing: 1.5,
		textAlign: 'center',
		textTransform: 'uppercase',
		marginTop: 30,
		marginHorizontal: 30,
	},

	cardSubtitle: {
		fontSize: 20,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_DARK,
		textAlign: 'center',
		marginTop: 10,
	},

	boxContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15,
		marginBottom: 10,
	},

	box: {
		height: 24,
		width: 95,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: theme.BLACK,
		borderWidth: 1,
		marginHorizontal: 10,
	},

	textContainer: {
		marginHorizontal: 16,
		marginBottom: 10,
	},
	sectionTitle: {
		fontSize: 20,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_DARK,
		marginTop: 25,
	},

	sectionText: {
		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_LIGHT,
		marginTop: 12,
	},

	textRowContainer: {	
		marginHorizontal: 16,
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	quoteText: {
		fontSize: 22,
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		marginTop: 22,
	},

	quoteAuthorText: {
		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		textTransform: 'uppercase',
		marginTop: 12,
		marginBottom: 10,
	},

	
	// button stuff
	buttonContainer: {
		backgroundColor: theme.WHITE,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: Platform.OS === 'ios' ? isIphoneX() ? 20 : 0 : 0,
	},

	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		backgroundColor: theme.BLACK,
		borderWidth: 1,
		
		marginTop: 18,
		marginHorizontal: 40,
	},
	
	boxText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 15,
		textAlign: 'center',
	},

	boxSmallText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 15,
		textAlign: 'center',
	},

	// for last card
	saveForLaterButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: cardWidth-60,
		backgroundColor:theme.BLACK,
		marginBottom: 25,
		marginTop: 25,
		marginHorizontal: 30,
	},

})