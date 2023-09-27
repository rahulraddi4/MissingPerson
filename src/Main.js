import React from "react";
import { Text, View } from 'react-native';
import Btn from "./Btn";
import { darkGreen } from "./constants";
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from "@react-navigation/native";

const Main = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Email: {Auth().currentUser.email}</Text>
            <Text>UID: {Auth().currentUser.uid}</Text>
            <Btn Press={async () => {
                await Auth().signOut();
                navigation.dispatch(StackActions.popToTop());

            }} textColor='white' bgColor={darkGreen} btnLabel='Logout' />
        </View>
    );
};

export default Main;