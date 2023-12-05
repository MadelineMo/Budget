// load the app (primarily calls routes at the moment)

import Routes from './routes.js'

import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `budgetStorage`,
  path: `/Users/madelinemoran/Apps/Budget/src/Storage`,
})

const App = () => {
	// load routes
	loadRouteHome = () => props.navigation.navigate('Home');
	return (
		<Routes />
	);
};

export default App;
