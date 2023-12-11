

// import react js base library
import React, { Component, useCallback, useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground, TextInput, Button, Text} from 'react-native';

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'

class ListExpenses extends Component {
	constructor(props){
		super(props);
		this.state = {
			textInput: '',
			textOutput: 'bill',
			textValue: '100',
			displayList: JSON.parse(storage.getString('expensesList')),
		};
	}
	setStorage = () => {
		//subtract expense from total and save as new total
		const total = storage.getString('budgetTotal')
		const newTotal = total - this.state.textValue
		storage.set('budgetTotal', JSON.stringify(newTotal))
		//get stored list and add to it with new list item
		const list = JSON.parse(storage.getString('expensesList'))
		const add = {
			name: this.state.textOutput,
			value: this.state.textValue,
		}
		console.log('beforelise',JSON.stringify(list))
		list.push(add)
		console.log('afterlist',JSON.stringify(list))
		storage.set('expensesList', JSON.stringify(list))
		//this.setState({displayList: list})
		//console.log(JSON.stringify(list))
	}
	/* <View style={styles.quoteContext}>
				<Text style={styles.questionText}>
					{this.state.textOutput}: ${this.state.textValue}
				</Text>
			</View>*/
	render() {
		return(
			<View>
			<ContentText style={styles.catagoryText}>
				Name:
			</ContentText>
            <TextInput
					ref={component => this._textInput = component}
					style={styles.input}
					placeholder={this.state.textInput}
					onChangeText={(textOutput) => this.setState({textOutput})}
					selectionColor='#a3be8c'
				/>
            <ContentText style={styles.catagoryText}>
				Total: 
			</ContentText>
            <TextInput
					ref={component => this._textInput = component}
					style={styles.input}
					placeholder={this.state.textInput}
					onChangeText={(textValue) => this.setState({textValue})}
					selectionColor='#a3be8c'
			/>
			<View style={styles.saveButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="Save" 
					onPress={this.setStorage}
					//onPress={() => {this.setStorage; this.setState({displayList: list})}}
				/>
			</View>
			</View>
		)
	}
}

const InvoiceModal = props => {
	expenses = () => props.navigation.navigate('Home')
	const list = JSON.parse(storage.getString('expensesList'))
	const [display, setDisplay] = useState(list);

	resetValue = () => {
		const getList = storage.getString('expensesList')
		setDisplay(getList);
		console.log('resetValue', JSON.stringify(list))
	}
	/*<View style={styles.exitButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="re-render" 
					onPress={updateDisplay}
				/>
			</View>
			*/
	return (
		
		<Main style={styles.main}>
			<SafeAreaView style={styles.scrollView}>
			<ScrollView>
			<ListExpenses></ListExpenses>
			<View style={styles.rerenderButton2}>
				<ModalButton // new budget button
					color="white"
					screenName="Rerender" 
					onPress={resetValue}
				/>
			</View>
			<View style={styles.exitButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="Exit" 
					onPress={expenses}
				/>
			</View>
			<ContentText style={styles.ScrollText}>
				Saved Expenses: 
			</ContentText>
			<View style={styles.container}>
      			{list.map((expense, index) => {
        			return (
          				<View style={styles.item} key={index}>
            				<Text style={styles.item}> {expense.name}: ${expense.value}</Text>
          				</View>
       		 		);
      			})}
    		</View>
			</ScrollView>
			</SafeAreaView>
		</Main>
	)

};

export default InvoiceModal;