import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const BackgroundScreen = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../assets/screen.png")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
}


export default BackgroundScreen;