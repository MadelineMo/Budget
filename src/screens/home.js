// home screen should display whole budet 

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, Wrapper,   } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView,} from 'react-native';

const HomeScreen = props => {
	// need to add link to start screen and reset stack
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
					source={require('./images/temp.png')} 	
				/>
			</View>
			<ContentText style={styles.homeHeading}>
				You have saved:
				
			</ContentText>
		</ScrollView>
		</SafeAreaView>
		</Main>
		</Wrapper>
	);
};

export default HomeScreen;
