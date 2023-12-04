// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'



const Question1 = props => {
	// load link to home screen
	loadRouteNext = () => props.navigation.navigate('Question 2');
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}>
				<ContentText style={styles.newHeading}>
					What would you like to name this budget?
				</ContentText>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/Icon.png')} 	
				/>
                <TextInput
					style={styles.input}
					placeholder='Name....'
				/>
                <View style={styles.nextButtonContainer}>
					<NavButton // old budget button
						color="white"
						screenName="Next"
						onPress={loadRouteNext}
					/>	
				</View>
			</View>
		</Main>	
		</Wrapper>
	)

};

export default Question1;