// how do you want to track your expenses?
    // weekly or monthly
// what are your expenses?
    // receives a number (positive or negative - store positive)
// what is your income?
    // receives a number (positive or negative - store positive)
// use images for all questions 
// save locally 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View } from 'react-native';

const NewBudget = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Home');
    // add links within the page to jump to each question
	//dismis modal when start budget is pressed??
	dismissModal = () => navigation.dismissModal(this.props.NewBudget);
	return (
		<Wrapper>
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}>
				<ContentText style={styles.questionText}>
					new budget questionare
				</ContentText>
			</View>
			<View style={styles.newButtonContainer}>
				<NavButton
						color="white"
						screenName="Save Budget" 
						onPress={loadRouteHome}
				/>
				</View>
		</Main>	
		</Wrapper>
	)

};

export default NewBudget;