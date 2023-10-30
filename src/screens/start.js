// new budget button
    // leads to questionare modal? or screens? 
// old budget
    // leads to modal with list (buttons) of saved budgets

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, ModalButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View } from 'react-native';
import { ImageResizeMode } from 'react-native';

const StartScreen = props => {
	// modal containing questonare for new budget
    newModal = () => props.navigation.navigate('NewBudget');
    // modal containing links to saved budgets
	savedBudget = () => props.navigation.navigate('Home');

	return (
		<Wrapper style={styles.wrapper}>
			<Main style={styles.main}>
				<ContentText style={styles.startHeading}>
					Welcome to your Budget!
				</ContentText>
				<View style={{alignItems: 'center'}}>
					<Image 
						style={styles.image}
						resizeMode="contain"
						source={require('./images/Icon.png')} 	
					/>
				</View>
				<View style={styles.newButtonContainer}>
					<ModalButton 
						color="white"
						screenName="+ New Budget" 
						onPress={newModal}
						backgroundColor='#11cd86'
					/>
				</View>
				<View style={styles.oldButtonContainer}>
					<NavButton
						color="white"
						screenName="- Saved Budget"
						backgroundColor='#11cd86'
						onPress={savedBudget}
					/>	
				</View>
			</Main>
		</Wrapper>

	);

};

export default StartScreen;