// home screen should display whole budet 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const HomeScreen = props => {
	return (
		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Nav stack" />
			<Main style={styles.main}>
				<Header style={styles.mainHeader} type={styles.h3} heading="Menu" />
				<ContentText style={styles.defaultText}>
					This is the home screen
				</ContentText>
			</Main>
		</Wrapper>

	);

};

export default HomeScreen;
