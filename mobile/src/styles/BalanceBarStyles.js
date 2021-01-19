import { Platform, StyleSheet } from 'react-native';

// BalanceBar styles
export default StyleSheet.create({
  
  balanceBarContainer: {
		backgroundColor: '#FFFFFF',
		shadowOffset:{width: 0, height: 4},
		shadowColor: '#858585',
		shadowOpacity: 0.1,
	},
	balanceBarTitleContainer: {
		marginTop: 15,
		paddingHorizontal: '4%',
	},
	balanceBarTitle: {
		fontSize: 22,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textAlign: 'left',
  },

  svgContainer: {
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 5,
  },

  balanceBarTextContainer: {
    paddingHorizontal: '4%',
    flexDirection:'row',
    justifyContent:'space-between',
  },

  balanceBarText: {
    fontSize: 18,
    fontFamily: 'gill-reg',
    color: '#121212',
    marginTop: 3,
  },

  balanceBarSubtext: {
    fontSize: 14,
    fontFamily: 'gill-reg',
    color: '#999999',
    marginTop: 3,
  },

})