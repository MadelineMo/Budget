// home screen should display whole budget 

// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground,} from 'react-native';

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'

const HomeScreen = props => {

	//state notice when name is changed
	const [name, setName] = React.useState('Name');
	const [time, setTime] = React.useState('30');
	const [income, setIncome] = React.useState('1000');
	const [max, setExpense] = React.useState('600');
	// save name once state changes
	useEffect(() => {
		storeName = storage.getString('name')
		storeIncome = storage.getString('income')
		storeMax = storage.getString('max')
		
		console.log(storeIncome)
		console.log(storeName)
		console.log(storeMax)

		setName(storeName)
		setIncome(storeIncome)
		setExpense(storeMax)

	}, [])
	
	// need to add link to start screen and reset stack
	// or add menu option to go between new and old budgets 
	// ideally would populate data into a template based on which budget is active
	expenses = () => props.navigation.navigate('Expense')
	newCatagory = () => props.navigation.navigate('NewCatagory')
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
		<SafeAreaView style={styles.scrollView}>
		<ScrollView>
			<View style={styles.homeAddButton}>
					<ModalButton // new budget button
						color="white"
						screenName="+" 
						onPress={newCatagory}
					/>
				</View>
			<View style={{alignItems: 'center'}}> 
			{/* over lay text on image - savings centered in circle */}
				<ImageBackground source={require('./images/temp.png')} style={styles.logoImage}>
					<ContentText style={styles.homeHeading}>
						Savings Total: ${max}
					</ContentText>
				</ImageBackground>
				
				<View style={styles.homeTab}>
					<ModalButton // new budget button
						color="white"
						screenName="Expense" 
						onPress={expenses}
					/>
				</View>
				
			</View>
		</ScrollView>
		</SafeAreaView>
		</Main>
		</Wrapper>
	);
};

export default HomeScreen;
