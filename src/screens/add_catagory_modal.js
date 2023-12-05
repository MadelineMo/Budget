// name and add value to catagory
// potentialy lable as expence or income

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground, TextInput} from 'react-native';

const CatagoryModal = props => {
	home = () => props.navigation.navigate('Home')
	return (
		<Main style={styles.main}>
			<ContentText style={styles.catagoryText}>
				Title:
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='type here'
				/>
            <ContentText style={styles.catagoryText}>
				Max Spending: 
			</ContentText>
            <TextInput
					style={styles.input}
					placeholder='$......'
			/>
			<View style={styles.newButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="return" 
					onPress={home}
				/>
			</View>
		</Main>
	)

};

export default CatagoryModal;