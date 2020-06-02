// Imports
import { Platform, StyleSheet, } from 'react-native';
import theme, {wp, hp} from './theme.styles'

// Reward Card styles
export default StyleSheet.create({
	rewardContainer: {
		height: 185,
		width: 280,
		paddingLeft: 22,
		paddingRight: 16,
		marginTop: 10,
		marginBottom: 30,
		backgroundColor: theme.WHITE,
		alignItems: 'center',
	},
	rewardImage: {
		width: 65,
		height: 65,
		marginTop: 13,
	},
	rewardTitle: {
		fontSize: 22,
		fontFamily: 'gill-reg',
		textAlign: 'center',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		marginTop: 10,
	},
	rewardSubtitle: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		color: theme.TEXT_LIGHT,
		textAlign: 'center',
		marginTop: 3,
	},
	boxContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
	box: {
		height: 25,
		width: 65,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: theme.BLACK,
		borderWidth: 1,
		marginHorizontal: 12,
	},

	boxText: {
		fontFamily: theme.FONT_REGULAR,
		color: theme.BLACK,
		fontSize: 14,
		textAlign: 'center',
	}

})
