import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundfive = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/Background5.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundfive;