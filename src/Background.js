import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const Background = ({ children, source }) => {
    return (
        <View>
            <ImageBackground source={source} style={{ height: '100%' }}>
                <View style={{ position: 'absolute' }}>
                    <ScrollView>
                        {children}
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Background;