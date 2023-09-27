import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green, blue } from './constants';

const Home = (props) => {
    return (
        <Background source={require("./assets/leaves.jpg")}>
            <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
                <Text style={{ color: 'white', fontSize: 30, fontFamily: 'AbrilFatface' }}>Let's Start</Text>
                <Text style={{ marginBottom: -15, color: 'white', fontSize: 30, fontFamily: 'AbrilFatface' }}>Finding.!!</Text>
                <Btn bgColor={green} textColor='white' btnLabel='Login' Press={() => props.navigation.navigate("Login")} />
                <Btn bgColor='white' textColor={darkGreen} btnLabel='Sign Up' Press={() => props.navigation.navigate("Signup")} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingTop: 70 }}>
                    <Text style={{ color: 'white' }}>If you are a Normal Citizen, Please</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.replace("Main2")}
                        style={{ backgroundColor: blue, borderRadius: 5, padding: 10 }}
                    >
                        <Text style={{ color: '#1bfc06', fontSize: 15, fontWeight: 'bold' }}>Click here</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'orange', fontSize: 12, paddingTop: 40, paddingRight: 30 }}>
                    "Every missing person has a Story, a Family, and a Community that cares.
                    Together, we can be the HOPE they need, the voice they Deserve, and the Strength that brings them back HOME!!!"
                </Text>
            </View>
        </Background>
    );
}

export default Home;
