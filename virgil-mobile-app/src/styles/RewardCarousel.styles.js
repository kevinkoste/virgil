// Imports
import { Platform, StyleSheet, } from 'react-native';
import theme, {wp, hp} from './theme.styles'

export const cardWidth = wp(92)
const cardHeight = hp(77)
const cardHorizontalMargin = wp(1)
export const sliderWidth = wp(100)
export const itemWidth = cardWidth + cardHorizontalMargin * 2

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({

	// text style for confirmation message
	confirmationText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
		fontSize: 30,
		// textAlign: 'left',
		letterSpacing: 1.5,
	},

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

	cardSectionTitle: {
		fontSize: 20,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_DARK,
		marginTop: 15,
	},

	cardText: {
		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_LIGHT,
		marginTop: 10,
	},
	textContainer: {
		marginHorizontal: 30,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: cardWidth-60,
		marginBottom: 20,
		marginTop: 20,
		marginHorizontal: 30,
		backgroundColor: theme.BLACK,
	},
	
	boxText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 15,
		textAlign: 'center',
	},

	activateText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.WHITE,
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