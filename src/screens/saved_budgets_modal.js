// future idea - - allow for multiple budgets

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Main, NavButton, ModalButton, Wrapper, } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View } from 'react-native';


const OldBudgetScreen = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Home');
	return (
		<Main style={styles.main}>
			<View style={styles.oldButtonContainer}>
					<NavButton // old budget button
						color="white"
						screenName="Saved Budget 1"
						onPress={loadRouteHome}
					/>	
			</View>
		</Main>
	)

};

export default OldBudgetScreen;