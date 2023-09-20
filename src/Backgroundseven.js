import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundseven = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/Background7.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundseven;