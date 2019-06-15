import React from 'react';
import { View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Registrarse',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	_showMoreApp = () => {
		this.props.navigation.navigate('Other');
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<View>
				<Button title="Muestrame el chat" onPress={this._showMoreApp} />
				<Button title="Mejor, cierra sesion :'v" onPress={this._signOutAsync} />
			</View>
		);
	}
}
