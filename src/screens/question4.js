// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'



const Question4 = props => {
	// load link to home screen
	loadRouteHome = () => props.navigation.navigate('Saved Budgets');
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
					placeholder='$....'
				/>
				<View style={styles.nextButtonContainer}>
					<NavButton // old budget button
						color="white"
						screenName="Save"
						onPress={loadRouteHome}
					/>	
				</View>
			</View>
		</Main>	
		</Wrapper>
	)
};

export default Question4;