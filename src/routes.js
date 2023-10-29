/*
* routes.js
* - app routing
* - basic usage for stack navigator
* - includes basic modal screen usage
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import required screen components
*  - home screen
*  - basic screen 
*  - modal screen
*  - ...
*/
import HomeScreen from './screens/home.js';
import BasicScreen from './screens/basic_screen.js';
import ModalScreen from './screens/modal_screen.js';

// create object for stack navigator
const Stack = createNativeStackNavigator();

const Routes = props => {

	// stack includes two groups
	// - main screens called with stack
	// - secondary screens for modal usage
	return (

		<NavigationContainer>
			<Stack.Navigator 
        		initialRouteName="Home"
        		screenOptions={{
          			headerStyle: {
           			 	backgroundColor: '#4c566a',
          			},  
          			headerTintColor: '#EEEEEE',
          			headerTitleStyle: {
            			fontWeight: '300',
          			},
        		}}
      		>
				<Stack.Group>
					<Stack.Screen 
						name="Home"
						component={HomeScreen} 
						options={{ 
							title: 'Home', 
						}}
					/>
					<Stack.Screen 
						name="Screen1" 
						component={BasicScreen} 
						options={{
							title: 'Details'
						}}
					/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen
						name="ModalTest"
						component={ModalScreen}
						options={{
							animation: 'slide_from_bottom',
							presentation: 'modal'
						}}
					/>
				</Stack.Group>	
      		</Stack.Navigator>
		</NavigationContainer>
		
	);

};

export default Routes;
