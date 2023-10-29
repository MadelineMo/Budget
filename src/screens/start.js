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
				
				<ModalButton 
					color="#000000"
          			screenName="+ New Budget" 
					onPress={newModal}
					backgroundColor='#11cd86'
                />
                <NavButton
                    color="#000000"
                    screenName="- Saved Budget"
					backgroundColor='#11cd86'
                    onPress={savedBudget}
                />
			</Main>
		</Wrapper>

	);

};

export default StartScreen;