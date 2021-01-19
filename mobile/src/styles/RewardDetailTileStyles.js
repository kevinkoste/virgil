import { Platform, StyleSheet } from 'react-native';

// Reward styles
export default StyleSheet.create({
	rewardTileContainer: {
		paddingTop: 20,
		marginBottom: 18,
		backgroundColor: '#FFFFFF',
		shadowOffset:{  width: 0,  height: 4,  },
		shadowColor: '#858585',
		shadowOpacity: 0.1,
	},

	rewardHeaderContainer: {
		marginTop:15,
		flexDirection:'row',
		paddingHorizontal: '4%',
	},

	rewardImage: {
		width: 95,
		height: 95,
		marginRight: 16,
	},
	rewardTitleText: {
		fontSize: 24,
		fontFamily: 'gill-semibold',
		// letterSpacing: 1.5,
		textAlign: 'left',
		textTransform: 'uppercase',
		marginLeft: 2,
	},
	rewardCategoryText: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		color: '#999999',
		// letterSpacing: 1.5,
		textAlign: 'left',
		textTransform: 'capitalize',
		marginLeft: 3,
		marginBottom: 10,
	},

	redeemButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		width: 100,
		backgroundColor: '#EBCE78',
		borderRadius: 20,
	},
	redeemButtonText: {
		fontSize: 20,
		fontFamily: 'gill-reg',
		color: '#FFFFFF',
		// letterSpacing: 1.5,
	},

	rewardDetailsContainer: {
		marginTop:15,
		marginBottom:30,
		paddingLeft: '4%',
		paddingRight: '5%',
	},

	rewardDetailsUpperText: {
		fontSize: 20,
		fontFamily: 'gill-reg',
		color: '#121212',
		marginBottom: 8,
	},

	rewardDetailsLowerText: {
		fontSize: 14,
		fontFamily: 'gill-reg',
		color: '#999999',
	},



})
