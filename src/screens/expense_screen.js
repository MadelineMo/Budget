// expense screen should show logged expenses
// should be able to add expenses to this catagory

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground,} from 'react-native';

const ExpenseScreen = props => {
	return (
		<Main style={styles.main}>
			<ContentText style={styles.defaultText}>
				Expense Report
			</ContentText>
		</Main>
	)

};

export default ExpenseScreen;