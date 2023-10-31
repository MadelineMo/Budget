//all styles (think CSS)

import React from 'react';
import { StyleSheet, StatusBar, } from 'react-native';


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		height: '95%',
		backgroundColor: '#eceff4', // screen background color
	},
    headingGroup: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3F5173',
    },
    //defaultHeading: {
      //  fontSize: 26,
    //},
    //mainHeading: {
      //  color: '#EFD5F2',
        //fontWeight: '400',
    //},
    startHeading: { // heading for start screen
        color: '#000000',
        fontSize: 32,
		textAlign: 'center',
		padding: 10,
    },
	startButton: {
		alignItems:'center',
		backgroundColor:'#11cd86'
	},
	buttonText: {
		fontSize: 26,
		fontWeight: 'bold',
		color:'#EFD5F2',
	},
	homeHeading: {
		color: '#000000',
        fontSize: 20,
		textAlign: 'center',
	},
	image: {
		margin: 20,
		width: 250,
		height: 250,
	},
	//screenHeader: {
	//	marginTop: 1,
	//	padding: 15,
	//	backgroundColor: '#F70044',
	//},
	header: {
		marginTop: 5,
		marginBottom: 5,
		color: '#4c566a',
		fontSize: 20,
		fontWeight: '400',
	},
	h1: {
		color: '#eceff4',
		fontSize: 28,
		fontWeight: '300',
	},
	h2: {
		color: '#eceff4',
		fontSize: 26,
		fontWeight: '300',
	},
	h3: {
		color: '#eceff4',
		fontSize: 24,
		fontWeight: '300',
	},
	h4: {
		color: '#eceff4',
		fontSize: 22,
		fontWeight: '300',
	},
	main: {
		marginTop: 15,
		color: '#3b4252',
		fontSize: 20,
		alignContent:'center',
	},
	defaultContent: {
		padding: 15,
	},
	defaultText: {
		marginTop: 5,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: '300',	
	},

	newButtonContainer:{ // start screen button for questionare
		margin: 20,
		backgroundColor:'#11cd86'
	},
	oldButtonContainer:{ // start screen button for home screen
		margin: 20,
		backgroundColor:'#056fa8'
	},
	questionText:{
		color:'black',
		textAlign:'center',
	},
	//scroll view
	scrollView: { // https://reactnative.dev/docs/scrollview
		paddingTop: StatusBar.currentHeight,
	},

});

export {
	styles,
};

