// load the app (primarily calls routes at the moment)

//test test test
import Routes from './routes.js'

const App = () => {
	// load routes
	loadRouteHome = () => props.navigation.navigate('Home');
	return (
		<Routes />
	);
};

export default App;
