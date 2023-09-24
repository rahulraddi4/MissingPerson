import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundfour = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../assets/Background4.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundfour;