

// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground, TextInput} from 'react-native';

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'


const InvoiceModal = props => {
	const [name, onChangeName] = React.useState('Name');
	const [number, onChangeNumber] = React.useState('0');
	useEffect(() => {
		storage.set('expense', name);
		console.log('expense', name);
		storage.set('expense.cost', number);
		console.log('cost', number)
	}, [])


	expenses = () => props.navigation.navigate('Expense')
	return (
		<Main style={styles.main}>
			<ContentText style={styles.catagoryText}>
				Name:
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='type here'
					onChangeText={onChangeName}
					value={name}
				/>
            <ContentText style={styles.catagoryText}>
				Total: 
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='$......'
					onChangeText={onChangeNumber}
					value={number}
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