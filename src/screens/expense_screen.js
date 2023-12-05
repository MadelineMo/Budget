// expense screen should show logged expenses
// should be able to add expenses to this catagory

// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground,} from 'react-native';

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'

const ExpenseScreen = props => {
	//state notice when name is changed
	const [name, setName] = React.useState('expense');
	const [max, setExpense] = React.useState('600');
	// save name once state changes
	useEffect(() => {
		storeName = storage.getString('expense')
		storeMax = storage.getString('expense.cost')
		
		console.log(storeName)
		console.log(storeMax)

		setExpense(storeMax)
		setExpense(storeMax)

	}, [])



	add = () => props.navigation.navigate('AddInvoice')
	return (
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}>
				<ContentText style={styles.total}>
					Total:
				</ContentText>
				<ContentText style={styles.totalNumber}>
					$230
				</ContentText>
			</View>
			<View style={styles.addExpense}>
					<ModalButton
						color="white"
						screenName="Add Expense" 
						onPress={add}
					/>
				</View>
			{/* add remove expense button */}
			{/* list of expenses */}
			<ContentText style={styles.listText}>
				{name}: ${max}
			</ContentText>
			<ContentText style={styles.listText}>
				Internet: $30
			</ContentText>
			<ContentText style={styles.listText}>
				Gas: $40
			</ContentText>
			<ContentText style={styles.listText}>
				Grocerys: $110
			</ContentText>
		</Main>
	)

};

export default ExpenseScreen;