//all styles (think CSS)

import React from 'react';
import { StyleSheet, StatusBar, } from 'react-native';


const styles = StyleSheet.create({
	// general
	wrapper: {
		flex: 1,
		height: '95%',
		backgroundColor: '#eceff4', // all screens background color
	},
	//scroll view
	scrollView: { // https://reactnative.dev/docs/scrollview
		paddingTop: StatusBar.currentHeight,
	},
	main: {
		marginTop: 15,
		color: '#3b4252',
		fontSize: 20,
		alignContent:'center',
	},

	// start screen
    startHeading: { 
        color: '#000000',
        fontSize: 32,
		textAlign: 'center',
		padding: 10,
    },
	startButton: {
		alignItems:'center',
		backgroundColor:'#11cd86'
	},
	logoImage: { // start screen logo
		margin: 20,
		width: 250,
		height: 250,
	},
	newButtonContainer:{ // start screen button for questionare
		margin: 20,
		backgroundColor:'#11cd86'
	},
	oldButtonContainer:{ // start screen button for home screen
		margin: 20,
		backgroundColor:'#056fa8'
	},

	// home screen
	homeHeading: { 
		color: '#000000',
        fontSize: 20,
		textAlign: 'center',
	},
	// unknown
	defaultContent: {
		padding: 15,
	},
	defaultText: {
		marginTop: 5,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: '300',	
	},
	
	// new budget screen
	newHeading: { 
		color: '#000000',
        fontSize: 20,
		textAlign: 'center',
		margin:20,
	},
	questionText:{
		color:'black',
		textAlign:'center',
	},
	dropdown:{
		backgroundColor: '#11cd86'
		//figure out how style works for this
	},
	questionImage:{
		margin: 20,
		paddingTop: 100,
		width: 250,
		height: 250,
	},
	nextButton:{
		margin: 20,
		backgroundColor:'#11cd86',
		paddingBottom:100,
	},
	backButton:{
		margin: 20,
		backgroundColor:'#11cd86'
	},
	input:{
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},

});

export {
	styles,
};

