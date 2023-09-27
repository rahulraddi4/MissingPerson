import React from 'react';
import { TextInput } from 'react-native';
import { darkGreen } from './constants';

const Field2 = props => {
    return (
        <TextInput
            {...props}
            style={{
                fontFamily: 'Lobster',
                borderRadius: 100,
                color: 'white',
                paddingHorizontal: 10,
                width: '90%',
                backgroundColor: 'rgba(255,255,255,0.5)',
                marginVertical: 10,
            }}
            placeholderTextColor='rgba(36, 37, 42, 1)'
        ></TextInput>
    );
};

export default Field2;
