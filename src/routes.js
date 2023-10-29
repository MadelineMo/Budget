/*
* routes.js
* - app routing
* - basic usage for stack navigator
* - includes basic modal screen usage
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import all screens
import HomeScreen from './screens/home.js';
import BasicScreen from './screens/basic_screen.js';
import StartScreen from './screens/start.js';
// import all modals
import OldBudgetModalScreen from './screens/saved_budgets_modal.js';
import NewBudget from './screens/questionare_modal.js';


// create object for stack navigator
const Stack = createNativeStackNavigator();

const Routes = props => {

	// stack includes two groups
	// - main screens called with stack
	// - secondary screens for modal usage
	return (

		<NavigationContainer>
			<Stack.Navigator 
        		initialRouteName="Start"
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
						name="Start"
						component={StartScreen} 
						options={{
							headerStyle: {
							  backgroundColor: '#f70044',
							},
							headerTitleStyle: {
							  fontWeight: '600',
							  fontSize: 24,
							},
				  }}
					/>
					<Stack.Screen 
						name="Home" 
						component={HomeScreen} 
						options={{
							headerStyle: {
								backgroundColor: '#056fa8',
							  },
							  headerTitleStyle: {
								fontWeight: '600',
								fontSize: 24,
							  },
						}}
					/>

				</Stack.Group>
				<Stack.Group>
					<Stack.Screen
						name="SavedBudget"
						component={OldBudgetModalScreen}
						options={{
							title: 'New Budget',
							animation: 'slide_from_bottom',
							presentation: 'modal'
						}}
					/>
					<Stack.Screen
						name="NewBudget"
						component={NewBudget}
						options={{
							title: 'New Budget',
							animation: 'slide_from_bottom',
							presentation: 'modal',
							headerStyle: {
								backgroundColor: '#11cd86',
							  },
							  headerTitleStyle: {
								fontWeight: '600',
								fontSize: 24,
							  },
						}}
					/>
				</Stack.Group>	
      		</Stack.Navigator>
		</NavigationContainer>
		
	);

};

export default Routes;
