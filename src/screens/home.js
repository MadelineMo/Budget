// home screen should display whole budet 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';

const HomeScreen = props => {
	return (
		<Wrapper style={styles.wrapper}>
			<Main style={styles.main}>
			<ContentText style={styles.homeHeading}>
					You have saved:
				</ContentText>
			</Main>
		</Wrapper>

	);

};

export default HomeScreen;
