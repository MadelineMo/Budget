// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, View, TextInput } from 'react-native';
import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js' 

const Question4 = props => {
	//state notice when name is changed
	const [expense, onChangeExpense] = React.useState('500');

	// save name once state changes
	useEffect(() => {
		//const blankList = [];
		storage.set('max', expense);
		storage.set('expensesList', '[]');
		console.log(JSON.stringify(storage.getString('expensesList')))
		console.log('max', expense);
	}, [expense])

	/* didnt work
	resetList = () => {
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
					<NavButton // budget screen
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