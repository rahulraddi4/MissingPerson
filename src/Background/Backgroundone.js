import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Backgroundone = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("./assets/leaves.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default Backgroundone;