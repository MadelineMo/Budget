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
import StartScreen from './screens/start.js';
import NewBudget from './screens/questionare_screen.js';
// import all modals
import OldBudgetModalScreen from './screens/saved_budgets_modal.js';


// create object for stack navigator
const Stack = createNativeStackNavigator();

const Routes = props => {

	// stack includes two groups
	// - main screens called with stack
	// - secondary screens for modal usage
	return (

		<NavigationContainer>
			<Stack.Navigator 
			// start on 'new' screen to select new or old budgets
        		initialRouteName="New"
        		screenOptions={{ 
          			headerTintColor: '#EEEEEE', // white text
          			headerTitleStyle: {
            			fontWeight: '300', // boldness
          			},
        		}}
      		>
				<Stack.Group>
					<Stack.Screen 
						name="New" // start screen
						component={StartScreen} 
						options={{
							headerStyle: {
							  backgroundColor: '#f70044', // red
							},
							headerTitleStyle: {
							  fontWeight: '600',
							  fontSize: 24,
							},
				  }}
					/>
					<Stack.Screen 
						name="Home" // home screen 
						component={HomeScreen} 
						options={{
							headerStyle: {
								backgroundColor: '#056fa8', // blue
							  },
							  headerTitleStyle: {
								fontWeight: '600',
								fontSize: 24,
							  },
						}}
					/>

				</Stack.Group>
				<Stack.Group>
					<Stack.Screen // not yet in use
						name="SavedBudget" // ideally shows all previous saved budgets
						component={OldBudgetModalScreen}
						options={{
							title: 'New Budget',
							animation: 'slide_from_bottom',
							presentation: 'modal'
						}}
					/>
					<Stack.Screen
						name="NewBudget" // new budget questionnaire
						component={NewBudget}
						options={{
							title: 'New Budget',
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
