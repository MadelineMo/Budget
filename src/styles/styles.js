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
		marginTop: 5,
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
		paddingTop: 75,
		paddingBottom: 0,
		paddingLeft: 40,
		paddingRight: 40,
	},
	homeHeading2: { 
		color: '#000000',
        fontSize: 25,
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 0,
		paddingLeft: 40,
		paddingRight: 40,
	},
	 homeTab:{ // start screen button for questionare
		margin: 40,
		paddingLeft: 60,
		paddingRight: 60,
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
	rerenderButton:{
		//margin: 40,
		paddingLeft: 60,
		paddingRight: 60,
		backgroundColor: '#f70044', // red
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
	},

	//invoice - now incorperated into expense screen
	container: {
		flex: 1,
		padding: 10,
	},
	item: {
		padding: 2,
		fontSize: 20,
		marginTop: 2,
	},
	exitButtonContainer:{ // start screen button for questionare
		backgroundColor:'#056fa8', // green
		marginLeft: 20, 
		marginRight: 20,
		marginBottom: 20,  
	},
	ScrollText:{
		marginTop: 5,
		paddingLeft:10,
		fontSize: 20,
		textDecorationLine: 'underline',
	},
	saveButtonContainer:{ // start screen button for questionare
		marginLeft: 20, 
		marginRight: 20,
		marginBottom: 10,
		marginTop: 10,
		backgroundColor:'#11cd86' // green
	},
	catagoryText:{
		marginTop: 2,
		paddingLeft: 5,
		marginBottom: 2,
		fontSize: 20,
		fontWeight: '300',	
	},
	input:{
		height: 40,
		margin: 8,
		borderWidth: 1,
		paddingLeft: 10,
		paddingRight: 10,
	},
	rerenderButton2:{
		marginLeft: 20, 
		marginRight: 20,
		marginBottom: 10,
		backgroundColor: '#f70044', // red
	},


});

export {
	styles,
};

