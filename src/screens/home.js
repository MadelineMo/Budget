// home screen should display whole budget 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper,   } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, Modal,} from 'react-native';

const HomeScreen = props => {
	// need to add link to start screen and reset stack
	// or add menu option to go between new and old budgets 
	// ideally would populate data into a template based on which budget is active
	startScreen = () => props.navigation.navigate('New'); 
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
		<SafeAreaView style={styles.scrollView}>
		<ScrollView>
			<View style={{alignItems: 'center'}}>
				<Image 
					style={styles.logoImage}
					resizeMode="contain"
					source={require('./images/Icon.png')} 	
				/>
			</View>
			<ContentText style={styles.homeHeading}>
				Savings Goal:
			</ContentText>
		</ScrollView>
		</SafeAreaView>
		</Main>
		</Wrapper>
	);
};

export default HomeScreen;
