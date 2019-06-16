import {
	createSwitchNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SignInScreen from './src/screens/SignIn/SignIn';
import SignUpScrenn from './src/screens/SignUp/SignUp';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';
// import Location from './src/screens/Location/Location';
import Camera from './src/screens/Camera/Camera';
import Map from './src/screens/Map/Map';
import Profile from './src/screens/Profile/Profile';
import ProfileEdit from './src/screens/ProfileEdit/ProfileEdit';
import Lists from './src/screens/Lists/Lists';
import Settings from './src/screens/Settings/Settings';

const AppStack = createDrawerNavigator({
	Home: HomeScreen,
	Other: ChatScreen,
	// Location: Location,
	Camera: Camera,
	Map: Map,
	Profile: Profile,
	ProfileEdit: ProfileEdit,
	Lists: Lists,
	Settings: Settings
});
const AuthStack = createBottomTabNavigator({
	SignIn: SignInScreen,
	SignUp: SignUpScrenn
});

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: AppStack,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
