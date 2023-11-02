// home screen should display whole budget 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper, ModalButton  } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal, ImageBackground,} from 'react-native';

const HomeScreen = props => {
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
						Savings Total: $100
					</ContentText>
				</ImageBackground>
				
				<View style={styles.homeTab}>
					<ModalButton // new budget button
						color="white"
						screenName="Expected Expenses" 
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
