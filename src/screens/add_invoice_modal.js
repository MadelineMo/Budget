

// import react js base library
import React, { Component, useCallback, useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground, TextInput, Button, Text} from 'react-native';

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'

const list = JSON.parse(storage.getString('expensesList'))

class ListExpenses extends Component {
	constructor(props){
		super(props);
		this.state = {
			textInput: '',
			textOutput: 'bill',
			textValue: '100'
		};
	}
	clearTextInput = () => {
		this._textInput.setNativeProps({text: ''});
		this.setState({textOutput: '....'})
		console.log(list)
	}
	setStorage = () => {
		//get list and add to list? 
		const add = {
			name: this.textOutput,
			value: this.textValue,
		}
		list.push(add)
		storage.set('expensesList', JSON.stringify(list))
		console.log(JSON.stringify(list))
	}
	render() {
		return(
			<View>
			<View>
				<View>
					<Button
						onPress={this.clearTextInput}
						title='clear text'
						color='#a3be8c'
					/>
				</View>
			</View>
			<View style={styles.quoteContext}>
				<Text style={styles.questionText}>
					{this.state.textOutput}: ${this.state.textValue}
				</Text>
			</View>
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
				/>
			</View>
			</View>
		)
	}
}

const InvoiceModal = props => {

	expenses = () => props.navigation.navigate('Expense')

	return (
		
		<Main style={styles.main}>
			<ListExpenses></ListExpenses>
			<View style={styles.exitButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="Exit" 
					onPress={expenses}
				/>
			</View>
			<SafeAreaView style={styles.scrollView}>
			<ScrollView>
			<ContentText style={styles.ScrollText}>
				Saved Expenses: 
			</ContentText>
			<View style={styles.container}>
      			{list.map((expense) => {
        			return (
          				<View style={styles.item}>
            				<Text style={styles.item}>{expense.name}: ${expense.value}</Text>
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