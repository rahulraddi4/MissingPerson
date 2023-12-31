import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Backgroundone from './Background/Backgroundone';
import Btn from './Btn';
import { darkGreen } from './constants';
import Field from './Field';
import Main from './Main';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            if (email.length > 0 && password.length > 0 && password.length > 5) {
                setIsLoading(true); // Set loading state
                const isUserLogin = await Auth().signInWithEmailAndPassword(email, password);
                setMessage('');
                console.log(isUserLogin);
                navigation.dispatch(StackActions.replace('Main'));
            } else {
                alert('Please check Email and Password credentials!!!');
            }
        } catch (err) {
            console.log(err);
            setMessage(err.message);
            alert('Login Error, Please Check your Password', err.message);
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <Backgroundone>
            <View style={{ alignItems: 'center', width: 390 }}>
                <Text
                    style={{
                        fontFamily: 'BebasNeue',
                        color: 'white',
                        fontSize: 45,
                        fontWeight: 'bold',
                        marginVertical: 10,
                    }}>
                    Login
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 800,
                        width: 340,
                        borderTopLeftRadius: 220,
                        paddingTop: 100,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 30, color: darkGreen, fontWeight: 'bold' }}>
                        Welcome Back
                    </Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginBottom: 50,
                        }}>
                        Login to your account
                    </Text>
                    <Field
                        placeholder="Email"
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <Field
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 10 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 14 }}>
                            Forgot Password ?
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>

                        <Btn textColor="white" bgColor={darkGreen} btnLabel="Login" Press={() => handleLogin()} isLoading={isLoading} />

                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: -60,
                        }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 14 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Backgroundone>
    );
};

export default Login;
