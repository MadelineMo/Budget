// future idea - - allow for multiple budgets

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Main } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const OldBudgetModalScreen = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Home');
	return (
		<Main style={styles.main}>
			<ContentText style={styles.defaultText}>
				old budget modal
			</ContentText>
			<NavButton //maybe make drop down menu??
					// its not adding links, its adding values to identify which dataset to load
					color="#888888"
          			screenName="Budget" 
					onPress={loadRouteHome}
        		/>
		</Main>
	)

};

export default OldBudgetModalScreen;