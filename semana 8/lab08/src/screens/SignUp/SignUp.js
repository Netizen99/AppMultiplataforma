import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	ToastAndroid,
	KeyboardAvoidingView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import axios from '../../lib/axios';

import imgBackground from '../../assets/img/background-login.jpg';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Inicie sesion',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-contact" size={25} color={tintColor} />;
		}
	};
	state = {
		user: '',
		password: '',
		loading: false,
		showPassword: false
	};
	showPassword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};
	inputHandler = (field, value) => {
		this.setState({ [field]: value });
	};
	onsubmitHandler = () => {
		if (
			this.state.user === '' ||
			this.state.password === '' ||
			this.state.password === ''
		) {
			return ToastAndroid.showWithGravity(
				'Falta ingresar datos!',
				ToastAndroid.SHORT,
				ToastAndroid.TOP
			);
		}
		if (this.state.password !== this.state.password2) {
			return ToastAndroid.showWithGravity(
				'Las contraseñas no coinciden',
				ToastAndroid.SHORT,
				ToastAndroid.TOP
			);
		}
		this.setState({ loading: true });
		axios({
			method: 'POST',
			url: 'api/user/signup',
			data: {
				email: this.state.user,
				username: this.state.name,
				password: this.state.password
			}
		})
			.then(async response => {
				ToastAndroid.showWithGravity(
					response.data.message,
					ToastAndroid.LONG,
					ToastAndroid.TOP
				);
				await AsyncStorage.setItem('userToken', response.data.token);
				this.props.navigation.navigate('App');
			})
			.catch(err => {
				ToastAndroid.showWithGravity(
					'Hubo un error en el registro',
					ToastAndroid.LONG,
					ToastAndroid.TOP
				),
					console.warn(err);
				this.setState({ loading: false });
			});
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={imgBackground}
					style={{
						width: '100%',
						height: '100%'
					}}
				>
					<KeyboardAvoidingView
						behavior="position"
						style={{ justifyContent: 'center' }}
						enabled
					>
						<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								fontSize: 48,
								color: '#fff'
							}}
						>
							Tecsup Videos
						</Text>
						<View style={{ padding: 10 }}>
							<View style={{ marginTop: 10 }}>
								<View>
									<Fumi
										style={{
											backgroundColor: '#46494f',
											opacity: 0.8,
											marginBottom: 10
										}}
										label={'Nombre'}
										iconClass={Icon}
										keyboardType="email-address"
										onChangeText={text => this.inputHandler('user', text)}
										value={this.state.user}
										iconName={'person'}
										iconColor={'#fff'}
										labelStyle={{ color: 'white' }}
										iconSize={30}
										iconWidth={40}
										inputPadding={16}
									/>
								</View>
								<View style={{ marginTop: 10 }}>
									<View>
										<Fumi
											style={{
												backgroundColor: '#46494f',
												opacity: 0.8,
												marginBottom: 10
											}}
											label={'Usuario(email)'}
											iconClass={Icon}
											keyboardType="email-address"
											onChangeText={text => this.inputHandler('user', text)}
											value={this.state.user}
											iconName={'email'}
											iconColor={'#fff'}
											labelStyle={{ color: 'white' }}
											iconSize={30}
											iconWidth={40}
											inputPadding={16}
										/>
									</View>
									<View style={{ flexDirection: 'row' }}>
										<Fumi
											style={{
												width: '82%',
												backgroundColor: '#46494f',
												opacity: 0.8
											}}
											label={'Contraseña'}
											labelStyle={{ color: 'white' }}
											onChangeText={text => this.inputHandler('password', text)}
											secureTextEntry={!this.state.showPassword}
											value={this.state.password}
											iconClass={Icon}
											iconName={'key'}
											iconColor={'#fff'}
											iconSize={30}
											iconWidth={40}
											inputPadding={16}
										/>
										<Icon
											color="#fff"
											style={{
												padding: 20,
												alignItems: 'center',
												backgroundColor: '#46494f',
												opacity: 0.8,
												height: 65
											}}
											size={25}
											name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
											onPress={this.showPassword}
										/>
									</View>
									<View style={{ flexDirection: 'row' }}>
										<Fumi
											style={{
												width: '82%',
												backgroundColor: '#46494f',
												opacity: 0.8
											}}
											label={'Confirmar Contraseña'}
											labelStyle={{ color: 'white' }}
											onChangeText={text => this.inputHandler('password', text)}
											secureTextEntry={!this.state.showPassword}
											value={this.state.password}
											iconClass={Icon}
											iconName={'key'}
											iconColor={'#fff'}
											iconSize={30}
											iconWidth={40}
											inputPadding={16}
										/>
										<Icon
											color="#fff"
											style={{
												padding: 20,
												alignItems: 'center',
												backgroundColor: '#46494f',
												opacity: 0.8,
												height: 65
											}}
											size={25}
											name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
											onPress={this.showPassword}
										/>
									</View>
									<TouchableOpacity
										onPress={this.onsubmitHandler}
										style={{
											marginTop: 20,
											padding: 15,
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: 25,
											backgroundColor: '#dcdcdc'
										}}
									>
										<Text
											style={{
												color: '#46494f',
												fontSize: 15,
												fontWeight: 'bold'
											}}
										>
											Iniciar sesion
										</Text>
									</TouchableOpacity>
									<View
										style={{
											marginTop: 10,
											justifyContent: 'center',
											alignItems: 'center',
											alignSelf: 'center'
										}}
									>
										<Text style={{ color: '#fff', fontSize: 14 }}>
											No tiene una cuenta?
											<Text
												onPress={this.registerHandler}
												style={{
													color: '#fff',
													fontSize: 16,
													fontWeight: 'bold'
												}}
											>
												{' '}
												Registrate aqui
											</Text>
										</Text>
									</View>
								</View>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
			</View>
		);
	}
}
