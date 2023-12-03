// how do you want to track your expenses?
    // weekly or monthly
// what are your expenses?
    // receives a number (positive or negative - store positive)
// what is your income?
    // receives a number (positive or negative - store positive)
// use images for all questions 
// save locally 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'



const NewBudget = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Saved Budget');
    // add links within the page to jump to each question
	const dates = ["Weekly", "Monthly"];
	const[time, setTime] = useState('Monthly');
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
		<SafeAreaView style={styles.scrollView}>
		<ScrollView>
			<View style={{alignItems: 'center'}}>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/time.png')} 	
				/>
				<ContentText style={styles.newHeading}>
					How frequently would you like to budget?
				</ContentText>
				<SelectDropdown // https://www.npmjs.com/package/react-native-select-dropdown
					data={dates}
					style={styles.dropdown}
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						setTime(selectedItem)
						return selectedItem
					}}
					rowTextForSelection={(item, index) => {
						return item
					}}
				/>
				<View style={styles.nextButton}>
					<Pressable
						color="white"
						screenName="Next"
						//onPress={}
					/>	
				</View>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/expensesIcon.png')} 	
				/>
				<ContentText style={styles.newHeading}>
					How much is your {time} income?
				</ContentText>
				<TextInput
					style={styles.input}
					placeholder='$......'
				/>
				<View style={styles.nextButton}>
					<Pressable
						color="white"
						screenName="Next"
						//onPress={}
					/>	
				</View>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/income.png')} 	
				/>
				<ContentText style={styles.newHeading}>
					How much are your {time} expenses?
				</ContentText>
				<TextInput
					style={styles.input}
					placeholder='$......'
				/>
				<View style={styles.nextButton}>
					<Pressable
						color="white"
						screenName="Next"
						//onPress={}
					/>	
				</View>
			</View>
			<View style={styles.newButtonContainer}>
				<NavButton
					color="white"
					screenName="Save Budget" 
					onPress={loadRouteHome}
				/>
			</View>
		</ScrollView>
		</SafeAreaView>
		</Main>	
		</Wrapper>
	)

};

export default NewBudget;