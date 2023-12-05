// import react js base library
import React, { useEffect, useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/styles.js';
import { Image, Pressable, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

import { storage } from '/Users/madelinemoran/Apps/Budget/src/storage.js'

const Question2 = props => {

	//state notice when name is changed
	const [time, onChangeTime] = React.useState('30');

	// save name once state changes
	useEffect(() => {
		storage.set('time', time);
		console.log('time', time)
	}, [time])

	// load link to home screen
	loadRouteNext = () => props.navigation.navigate('Question 3');
	return (
		<Wrapper style={styles.wrapper}>
		<Main style={styles.main}>
			<View style={{alignItems: 'center'}}>
				<ContentText style={styles.newHeading}>
					What time frame would you like this budget to be for? 
				</ContentText>
				<Image 
					style={styles.questionImage}
					resizeMode="contain"
					source={require('./images/time.png')} 	
				/>
                <TextInput
					style={styles.input}
					placeholder='Input number of days'
					onChangeText={onChangeTime}
					value={time}
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

export default Question2;