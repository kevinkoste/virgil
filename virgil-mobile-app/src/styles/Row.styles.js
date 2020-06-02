// Imports
import { StyleSheet } from 'react-native';
import theme, {wp, hp} from './theme.styles'
import { isIphoneX } from '../utils/utils'

// theme.FONT_REGULAR,
// theme.TEXT_LIGHT,

// Row styles
export default StyleSheet.create({
	rowContainer: {
		height: 65,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '4%',
	},
	rowImage: {
		width: 34,
		height: 34,
		marginRight: 17,
		marginLeft: 4,
	},
	rowAmount: {
		fontSize: 18,
		fontFamily: theme.FONT_REGULAR,
		letterSpacing: 1.5,
	},
	rowTitleContainer: {
		marginRight: 'auto'
	},
	rowTitle: {
		fontSize: 18,
		fontFamily: theme.FONT_REGULAR,
		marginBottom: 3,
	},
	rowSubtitle: {
		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		color: theme.TEXT_LIGHT,
	},
	rowSeparator: {
		marginLeft: 69,
		marginHorizontal: '4%',
		borderBottomColor: theme.LIGHT_GRAY,
		// borderBottomWidth: 1,
	},

	// Styles for modals
	modalContainer: {
		width: '100%',
		backgroundColor: theme.WHITE,
	},
	modalTitleContainer: {
		marginTop: 28,
		paddingHorizontal: '4%',
		paddingBottom: 7,
		alignItems: 'center',
	},
	modalTitleText: {
		fontSize: 22,
		fontFamily: theme.FONT_REGULAR,
		letterSpacing: 1.5,
		textAlign: 'left',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	modalRowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '4%',
		marginTop: 30,
	},
	modalRowLabel: {
		fontSize: 18,
		fontFamily: theme.FONT_REGULAR,
		color: '#999999'
	},
	modalRowText: {
		fontSize: 18,
		fontFamily: theme.FONT_REGULAR,
	},
	modalRowSeparator: {
		marginHorizontal: '4%',
		borderBottomColor: theme.LIGHT_GRAY,
		borderBottomWidth: 1,
	},

	// Modal exit button
	modalExitContainer: {
		height: 53,
		alignSelf: 'stretch',
		justifyContent:'center',
		alignItems: 'stretch',
		marginTop: 20,
	},
	modalExitText: {
		fontSize: 14,
		fontFamily: theme.FONT_REGULAR,
		letterSpacing: 1.5,
		textAlign: 'left',
		alignSelf: 'center',
	},

	modalImage: {
		alignSelf: 'center',
		width: 55,
		height: 55,
		marginTop: 20,
	},

	modalButtonContainer: {
		alignSelf: 'stretch',
		justifyContent:'center',
		alignItems: 'stretch',
		marginBottom: 10,
		marginTop: 5,
	},


	// styles for box row reward row tile
	boxContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	box: {
		height: 25,
		width: 65,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: theme.BLACK,
		borderWidth: 1,
	},
	boxText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 14,
		textAlign: 'center',
	}

})