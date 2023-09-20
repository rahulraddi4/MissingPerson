import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundthree = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/Background3.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundthree;