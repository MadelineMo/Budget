// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, TextInput } from 'react-native';

//import { MMKV } from 'react-native-mmkv'

//export const storage = new MMKV({
  //id: `budgetStorage`,
  //path: `/Users/madelinemoran/Apps/Budget/src/Storage/storage`,
//})

//storage.set('name', 'Monthly Budget')
//storage.set('time', 30)
//storage.set('income', 1000)
//storage.set('totalExpense', 600)

//const name = storage.getString('name')
//console.log(name)
import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js' 

const Question4 = props => {
	//state notice when name is changed
	const [expense, onChangeExpense] = React.useState('500');
	const list = [];

	// save name once state changes
	useEffect(() => {
		storage.set('max', expense);
		storage.set('expensesList', JSON.stringify(list));
		console.log('max', expense);
	}, [expense])

	/*resetList = () => {
		storage.delete('expensesList')
		storage.set('expensesList', JSON.stringify(list));
	}*/

	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Saved Budget');
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}>
				<ContentText style={styles.newHeading}>
					How much would you expect to spend during that time? 
				</ContentText>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/expensesIcon.png')} 	
				/>
                <TextInput
					style={styles.input}
					placeholder='$.....'
					onChangeText={onChangeExpense}
					value={expense}
				/>
				<View style={styles.nextButtonContainer}>
					<NavButton // old budget button
						color="white"
						screenName="Next"
						onPress={loadRouteHome}
					/>	
				</View>
			</View>
		</Main>	
		</Wrapper>
	)
};

export default Question4;