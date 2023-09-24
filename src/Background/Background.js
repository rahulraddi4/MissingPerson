import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const Backgroundone = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../assets/wallpaper.jpg")} style={{ height: '100%' }} />
            <View style={{ position: 'absolute' }}>
                <ScrollView>
                    {children}
                </ScrollView>
            </View>
        </View>
    );
}


export default Backgroundone;