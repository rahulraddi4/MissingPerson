import React from 'react';
import { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Backgroundone from './Backgroundone';
import Btn from './Btn';
import { darkGreen } from './constants';
import Field from './Field';
import Main from './Main';
import Login from './Login';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const Signup = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');


    const navigation = useNavigation();

    const handleSignup = async () => {
        try {
            if (email.length > 0 && password.length > 0 && password.length > 5) {
                if (password === confirmPassword) {
                    const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
                    console.log(isUserCreated);

                    if (isUserCreated.user) {
                        const uid = isUserCreated.user.uid;
                        await database().ref(`/Users/${uid}`).set({
                            name: name,
                            contactNumber: contactNumber,
                            Email: email
                        });
                        console.log('User data saved in the database.');

                        navigation.navigate('Login');
                    }
                } else {
                    alert("Please enter Password Correctly");
                }
            } else {
                alert("Please check Email and Password credentials!!!");
            }
        } catch (err) {
            console.log(err);
            setMessage(err.message);
        }
    };

    return (
        <Backgroundone>
            <View style={{ alignItems: 'center', width: 390 }}>
                <Text
                    style={{
                        fontFamily: "BebasNeue",
                        color: 'white',
                        fontSize: 45,
                        fontWeight: 'bold',
                        marginVertical: 10,

                    }}>
                    Register
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        marginTop: -10
                    }}>
                    Create a new account
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 800,
                        width: 340,
                        borderTopLeftRadius: 220,
                        paddingTop: 90,
                        alignItems: 'center',
                    }}>
                    <Field placeholder="Full Name" value={name}
                        onChangeText={value => setName(value)} />
                    <Field
                        placeholder="Email / Username"
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <Field placeholder="Contact Number" keyboardType={'number-pad'} value={contactNumber}
                        onChangeText={value => setContactNumber(value)} />
                    <Field placeholder="Password" secureTextEntry={true} value={password}
                        onChangeText={value => setPassword(value)} />

                    <Field placeholder="Confirm Password" secureTextEntry={true} value={confirmPassword}
                        onChangeText={value => setConfirmPassword(value)} />
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '78%',
                            paddingRight: 5,
                            justifyContent: 'center'
                        }}>
                        <Text style={{ color: 'grey', fontWeight: "bold", fontSize: 12 }}>
                            By signing in, you agree to our{' '}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 12 }}>
                            Terms & Conditions
                        </Text>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "center",
                            width: '78%',
                            paddingRight: 5,
                            marginBottom: 10
                        }}>
                        <Text style={{ color: 'grey', fontSize: 12 }}>
                            and
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 12 }}>
                            Privacy Policy
                        </Text>
                    </View>
                    <View style={{ marginTop: -45 }}>
                        <Btn textColor="white"
                            bgColor={darkGreen}
                            btnLabel="Signup"
                            Press={() => handleSignup()}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: -60,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            Already have an account ?{' '}
                        </Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Login')}>
                            <Text
                                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 14 }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Backgroundone>
    );
};

export default Signup;
