

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
			textValue: '100',
			displayList: list,
		};
	}
	setStorage = () => {
		//get list and add to list? 
		const add = {
			name: this.state.textOutput,
			value: this.state.textValue,
		}
		list.push(add)
		storage.set('expensesList', JSON.stringify(list))
		//list => this.setState({displayList})
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
					//onPress={() => {this.setStorage; this.setState({displayList})}}
				/>
			</View>
			<View style={styles.exitButtonContainer}>
				<ModalButton // new budget button
					color="white"
					screenName="Exit" 
					onPress={expenses}
				/>
			</View>
			</View>
		)
	}
}

const InvoiceModal = props => {

	expenses = () => props.navigation.navigate('Home')
	const [display, setDisplay] = useState(list);
	useEffect(() => {
		updateDisplay();
	})
	const updateDisplay = () => {
		setDisplay(list);
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
			<ListExpenses></ListExpenses>
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