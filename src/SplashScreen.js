import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';
import Background from './Background';


export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {

        setTimeout(() => {
            Auth().onAuthStateChanged(user => {
                const routeName = user !== null ? "Main" : "Home"
                navigation.dispatch(StackActions.replace(routeName));
            });
        }, 2000);
        return () => { };
    }, []);
    return (

        <Background source={require("./assets/screen.png")}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}></View>
        </Background>

    )
}