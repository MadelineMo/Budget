/*
* screens/modal_screen.js
* - basic modal screen for navigator
*/

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Main } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const ModalScreen = props => {

	return (
		<Main style={styles.main}>
			<ContentText style={styles.defaultText}>
				some modal screen test text...
			</ContentText>
		</Main>
	)

};

export default ModalScreen;