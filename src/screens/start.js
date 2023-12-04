// new budget button
    // leads to questionare modal? or screens? 
// old budget
    // leads to modal with list (buttons) of saved budgets

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Main, NavButton, ModalButton, Wrapper,} from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View } from 'react-native';

const StartScreen = props => {
	// screen containing questonare for new budget
    newModal = () => props.navigation.navigate('New Budget');
    // modal containing links to saved budgets !!not in use
	// home screen with saved budget
	savedBudget = () => props.navigation.navigate('Saved Budgets');

	return (
		<Wrapper style={styles.wrapper}>
			<Main style={styles.main}>
				<ContentText style={styles.startHeading}>
					Welcome to your Budget
				</ContentText>
				<View style={{alignItems: 'center'}}>
					<Image 
						style={styles.logoImage} // logo 
						resizeMode="contain"
						source={require('./images/Icon.png')} 	
					/>
				</View>
				<View style={styles.newButtonContainer}>
					<ModalButton // new budget button
						color="white"
						screenName="+ New Budget" 
						onPress={newModal}
					/>
				</View>
				<View style={styles.oldButtonContainer}>
					<NavButton // old budget button
						color="white"
						screenName="- Saved Budget"
						onPress={savedBudget}
					/>	
				</View>
			</Main>
		</Wrapper>

	);

};

export default StartScreen;