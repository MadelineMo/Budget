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
	const [income, setIncome] = React.useState('0');
	const [max, setExpense] = React.useState('0');
	const [total, setTotal] = React.useState(storage.getString('budgetTotal'));
	// save name once state changes
	useEffect(() => { // useEffect is not being called at each rerender?
		storeName = storage.getString('name')
		storeIncome = storage.getString('income')
		storeMax = storage.getString('max')

		setName(storeName)
		setIncome(storeIncome)
		setExpense(storeMax)

	}, [])
	resetValue = () => {
		const newTotal = storage.getString('budgetTotal')
		console.log('new total',newTotal)
		setTotal(newTotal)
	}

	
	const savings = income - max;
	
	// need to add link to start screen and reset stack
	// or add menu option to go between new and old budgets 
	// ideally would populate data into a template based on which budget is active
	expenses = () => props.navigation.navigate('AddInvoice')
	//newCatagory = () => props.navigation.navigate('NewCatagory')
	/* <View style={styles.homeAddButton}>
					<ModalButton // new budget button
						color="white"
						screenName="+" 
						onPress={newCatagory}
					/>
				</View>*/
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}> 
			{/* over lay text on image - savings centered in circle */}
				<ImageBackground source={require('./images/temp.png')} style={styles.logoImage}>
					<ContentText style={styles.homeHeading}>
						Current Savings: ${total}
					</ContentText>
				</ImageBackground>
				<ContentText style={styles.homeHeading2}>
						Projected Savings: ${savings}
					</ContentText>
				
				<View style={styles.homeTab}>
					<ModalButton // new budget button
						color="white"
						screenName="Expenses" 
						onPress={expenses}
					/>
				</View>
				<View style={styles.rerenderButton}>
					<ModalButton // new budget button
						color="white"
						screenName="Rerender" 
						onPress={resetValue}
					/>
				</View>
			</View>
		</Main>
		</Wrapper>
	);
};

export default HomeScreen;
