import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress={Press}
            style={{
                elevation: 5,
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 320,
                paddingVertical: 5,
                marginVertical: 75,

            }}>
            <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}
