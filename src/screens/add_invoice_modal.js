

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground, TextInput} from 'react-native';

const InvoiceModal = props => {
	expenses = () => props.navigation.navigate('Expense')
	return (
		<Main style={styles.main}>
			<ContentText style={styles.catagoryText}>
				Name:
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='type here'
				/>
            <ContentText style={styles.catagoryText}>
				Total: 
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='$......'
			/>
			<View style={styles.newButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="Save" 
					onPress={expenses}
				/>
			</View>
		</Main>
	)

};

export default InvoiceModal;