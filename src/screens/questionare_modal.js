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
import { ContentText, Header, Main, NavButton, ModalButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const NewBudget = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Home');
    // add links within the page to jump to each question
	//dismis modal when start budget is pressed??
	dismissModal = () => navigation.dismissModal(this.props.NewBudget);
	return (
		<Main style={styles.main}>
			<ContentText style={styles.defaultText}>
				new budget questionare
			</ContentText>
			<NavButton
					color="#888888"
          			screenName="Save Budget" 
					onPress={loadRouteHome}
        		/>
		</Main>
	)

};

export default NewBudget;