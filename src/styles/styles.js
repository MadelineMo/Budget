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
		backgroundColor:'#11cd86' // green
	},
	logoImage: { // start screen logo
		margin: 20,
		width: 250,
		height: 250,
	},
	newButtonContainer:{ // start screen button for questionare
		margin: 20,
		backgroundColor:'#11cd86' // green
	},
	oldButtonContainer:{ // start screen button for home screen
		margin: 20,
		backgroundColor:'#056fa8'
	},
	

	// home screen
	homeHeading: { 
		color: '#000000',
        fontSize: 30,
		textAlign: 'center',
		paddingTop: 90,
		paddingBottom: 0,
	},
	 homeTab:{ // start screen button for questionare
		margin: 40,
		backgroundColor:'#056fa8', // blue
	},
	homeAddButton:{
		margin: 0,
		backgroundColor: '#11CD86',
		padding: 0,
		width: 40,
		height: 40,
		color: '#000000',
	},
	
	// new budget screen - questionnaire
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
		color: '#11cd86',
		backgroundColor: '#11cd86'
		//figure out how style works for this
	},
	questionImage:{
		margin: 20,
		paddingTop: 100,
		width: 250,
		height: 250,
	},
	input:{
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	nextButton: {
		alignItems:'center',
		backgroundColor:'#11cd86' // green
	},
	nextButtonContainer:{ //next questionare
		margin: 20,
		width: 200,
		backgroundColor:'#11cd86' // green
	},
	
	// new catagory
	catagoryText:{
		marginTop: 5,
		marginBottom: 5,
		fontSize: 20,
		fontWeight: '300',	
	},
	input:{
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},

	//expense screen
	addExpense:{ // add expense button 
		alignItems:'center',
		backgroundColor:'#11cd86', // green
		margin: 20,
	},
	total:{
		marginTop: 5,
		marginBottom: 5,
		fontSize: 30,
		fontWeight: 300,
	},
	totalNumber:{
		marginTop: 5,
		marginBottom: 10,
		fontSize: 40,
		fontWeight: 300,
		color:'#11cd86' ,
	},
	listText:{
		fontSize: 20,
		fontWeight: 200,
		margin: 10,
	}

});

export {
	styles,
};

