import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundsix = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/Background6.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundsix;