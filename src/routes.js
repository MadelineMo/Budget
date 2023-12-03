/*
* routes.js
* - app routing
* - basic usage for stack navigator
* - includes basic modal screen usage
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// custom components
import { CustomDrawerContent } from './components/nav.js';

import HomeScreen from './screens/home.js';
import StartScreen from './screens/start.js';
import ExpenseScreen from './screens/expense_screen.js';
import InvoiceModal from './screens/add_invoice_modal.js';
import CatagoryModal from './screens/add_catagory_modal.js';
import NewBudget from './screens/questionare_screen.js';
import OldBudgetScreen from './screens/saved_budgets_modal.js';

// instantiate navigator object 
// - drawer usage
// - stack usage for Home & general app screens
// - stack usage for Notes screens
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const NewStack = createNativeStackNavigator();

const HomeStackScreen = () => { // premade budget - should actually start with budget selection screen 
	return (
		<HomeStack.Navigator
			initialRouteName="OldBudget"
			screenOptions={{ 
				headerTintColor: '#EEEEEE', // white text
			}}
		>
			<HomeStack.Screen 
				name="OldBudget" // saved budgets list
				component={OldBudgetScreen}
				options={{
					title: 'Saved Budget',
					headerStyle: {
						backgroundColor: '#11cd86', // green
					  },
					  headerTitleStyle: {
						fontSize: 24,
						color: '#ffffff' // white
					  },
				}}
			/>
			<HomeStack.Screen 
						name="Home" // home screen - change name based on budget? 
						component={HomeScreen} 
						options={{ 
							headerStyle: {
								backgroundColor: '#056fa8', // blue
							  },
							  headerTitleStyle: {
								fontSize: 24,
								color: '#ffffff'
							  },
						}}
					/>
			<HomeStack.Screen 
						name="NewCatagory"
						component={CatagoryModal}
						options={{
							title: "New Catagory",
							animation: 'slide_from_bottom',
							presentation: 'modal',
							headerStyle: {
								backgroundColor: '#056fa8', //blue
							  },
							  headerTitleStyle: {
								fontSize: 24,
								color: '#ffffff' //white
							  },
						}}
					/>
			<HomeStack.Screen
						name="Expense" 
						component={ExpenseScreen}
						options={{
							title: 'Expense', 
							headerStyle: {
								backgroundColor: '#11cd86', //green
							  },
							  headerTitleStyle: {
								fontSize: 24,
								color: '#ffffff' //white
							  },
						}}
					/>
			<HomeStack.Screen 
						name="AddInvoice"
						component={InvoiceModal}
						options={{
							title: "Add Invoice",
							animation: 'slide_from_bottom',
							presentation: 'modal',
							headerStyle: {
								backgroundColor: '#11cd86', //green
							  },
							  headerTitleStyle: {
								fontSize: 24,
								color: '#ffffff' //white
							  },
						}}
					/>
		</HomeStack.Navigator>
	);
};


const NewStackScreen = () => { // premade budget - should actually start with budget selection screen 
	return (
		<NewStack.Navigator>
			<NewStack.Screen 
						name="NewBudget" // new budget questionnaire
						component={NewBudget}
						options={{
							headerShown: false,
						}}
					/>
			
		</NewStack.Navigator>
	);
};

const Routes = props => {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName='Start'
				screenOptions={{
					headerTintColor: '#fffff', // color of icon: white
					drawerStyle: {
						backgroundColor: '#fffff', //color of menu
					},
					drawerActiveBackgroundColor: '#11cd86', //current tab color: green
					drawerActiveTintColor: '#fffff', //white
					drawerInactiveTintColor: '#000000', //black
				}}
			>
			<Drawer.Screen 
				name="Start" // start screen
				component={StartScreen} 
				options={{
					headerStyle: {
						backgroundColor: '#f70044', // red
					},
					headerTitleStyle: {
						fontSize: 24,
						color: '#fffff' //white
					},
				}} 
			/>
			<Drawer.Screen 
				name="Saved Budgets" // premade budget - should actually start with budget selection screen 
				component={HomeStackScreen} 
				options={{
					headerShown: false,
				}}
			/>
			<Drawer.Screen 
				name="New Budget" 
				component={NewStackScreen} 
				options={{
					headerStyle: {
						backgroundColor: '#056fa8', // blue
					},
					headerTitleStyle: {
						fontSize: 24,
					},
				}}
			/>		
    		</Drawer.Navigator>
		</NavigationContainer>
	
	);

};

export default Routes;
