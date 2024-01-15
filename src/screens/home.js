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
	const [total, setTotal] = React.useState(storage.getString('budgetTotal'));
	// save name once state changes
	useEffect(() => { // useEffect is not being called at each rerender?
		storeName = storage.getString('name')
		storeIncome = storage.getString('income')

		setName(storeName)
		setIncome(storeIncome)

	}, [])
	resetValue = () => {
		const newTotal = storage.getString('budgetTotal')
		console.log('new total',newTotal)
		setTotal(newTotal)
	}
	
	expenses = () => props.navigation.navigate('AddInvoice')
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
