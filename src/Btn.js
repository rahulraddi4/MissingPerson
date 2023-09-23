import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';

export default function Btn({ bgColor, btnLabel, textColor, Press, isLoading }) {
    return (
        <TouchableOpacity
            onPress={Press}
            disabled={isLoading} // Disable the button when loading
            style={{
                elevation: 5,
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 320,
                paddingVertical: 5,
                marginVertical: 75,
            }}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={textColor} />
            ) : (
                <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
                    {btnLabel}
                </Text>
            )}
        </TouchableOpacity>
    );
}
