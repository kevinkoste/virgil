import { Platform, StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window')

// Screen styles for HomeScreen, RewardsScreen, etc.
export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
	buttonText: {
		backgroundColor: 'transparent',
		fontSize: 22,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		color: '#FFFFFF',
		textAlign: 'left',
	},
  downChevron: {
    height: 10.5,
    width: 20,
    marginLeft: 10,
  },

	modalContainer: {
    width:'111%',
    backgroundColor:'#F3F3F3',
    position:'absolute',
    bottom: -20,
  },
  
  pickerContainer: {
    backgroundColor:'#CCCCCC',
    paddingBottom: 10,
  },
  pickerItems: {
    fontSize: 22,
    fontFamily: 'gill-reg',
    textTransform: 'capitalize',
  },

	// Modal exit button
	modalExitContainer: {
		height: 60,
		alignSelf: 'stretch',
		backgroundColor:'#F0F0F0',
		justifyContent:'center',
		alignItems: 'stretch',
		marginTop: 5,
	},
	modalExitText: {
		fontSize: 16,
		fontFamily: 'gill-reg',
		letterSpacing: 1.5,
		textAlign: 'left',
		alignSelf: 'center',
	},

})