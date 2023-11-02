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
import OldBudgetScreen from './screens/saved_budgets_modal.js';
import ExpenseScreen from './screens/expense_screen.js';

// import modals
import CatagoryModal from './screens/add_catagory_modal.js';
import InvoiceModal from './screens/add_invoice_modal.js';

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
            			fontWeight: 300, // boldness
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
								fontSize: 24,
							  },
						}}
					/>
					<Stack.Screen // not yet in use
						name="SavedBudget" // ideally shows all previous saved budgets
						component={OldBudgetScreen}
						options={{
							title: 'Saved Budgets',
							headerStyle: {
								backgroundColor: '#11cd86',
							  },
							  headerTitleStyle: {
								fontSize: 24,
							  },
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
								fontSize: 24,
							  },
						}}
					/>
					<Stack.Screen
						name="Expense" 
						component={ExpenseScreen}
						options={{
							title: 'Expense', // ideally would be changed based on saved name at creation
							headerStyle: {
								backgroundColor: '#11cd86',
							  },
							  headerTitleStyle: {
								fontSize: 24,
							  },
						}}
					/>
					<Stack.Screen 
						name="NewCatagory"
						component={CatagoryModal}
						options={{
							title: "New Catagory",
							animation: 'slide_from_bottom',
							presentation: 'modal',
							headerStyle: {
								backgroundColor: '#056fa8',
							  },
							  headerTitleStyle: {
								fontSize: 24,
							  },
						}}
					/>
					<Stack.Screen 
						name="AddInvoice"
						component={InvoiceModal}
						options={{
							title: "Add Invoice",
							animation: 'slide_from_bottom',
							presentation: 'modal',
							headerStyle: {
								backgroundColor: '#11cd86',
							  },
							  headerTitleStyle: {
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
