import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native'; // Import ScrollView
import { Picker } from '@react-native-picker/picker';
import BackgroundScreen from './BackgroundScreen';
import Btn from './Btn';
import { darkGreen } from './constants';
import { useNavigation, StackActions } from "@react-navigation/native";
import Auth from '@react-native-firebase/auth';
import Backgroundfive from "./Backgroundfive";
const Setting = () => {
    const navigation = useNavigation();
    const [showNotifications, setShowNotifications] = useState(false);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');

    const lightThemeStyles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        text: {
            color: 'white', // White text color for most text elements
            fontSize: 20,
            fontWeight: 'bold',
        },
        highlightText: {
            color: '#007BFF', // Highlighted text color
        },
        contentContainer: {
            flexGrow: 1, // Allow content to grow
            justifyContent: 'space-between', // Push content to the top and bottom
        },
    });

    const darkThemeStyles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        text: {
            color: 'white', // White text color for most text elements
            fontSize: 20,
            fontWeight: 'bold',
        },
        highlightText: {
            color: '#007BFF', // Highlighted text color
        },
        contentContainer: {
            flexGrow: 1, // Allow content to grow
            justifyContent: 'space-between', // Push content to the top and bottom
        },
    });

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleLogout = async () => {
        await Auth().signOut();
        navigation.dispatch(StackActions.popToTop());
    };

    const styles = theme === 'dark' ? darkThemeStyles : lightThemeStyles;

    return (
        <Backgroundfive>
            <View style={{ paddingBottom: 27 }}>
                <Text style={{ fontSize: 30, color: '#007BFF' }}>Settings:</Text>
            </View>
            <View style={[styles.container, { flex: 1 }]}>

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Show Notifications:</Text>
                        <Switch value={showNotifications} onValueChange={toggleNotifications} />
                    </View>
                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Select Theme:</Text>
                        <Picker selectedValue={theme} onValueChange={handleThemeChange}>
                            <Picker.Item label="Light" value="light" color="orange" />
                            <Picker.Item label="Dark" value="dark" color="orange" />
                        </Picker>
                    </View>
                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Select Language:</Text>
                        <Picker selectedValue={language} onValueChange={handleLanguageChange}>
                            <Picker.Item label="English" value="english" color="orange" />
                            <Picker.Item label="Spanish" value="spanish" color="orange" />
                            {/* Add more language options here */}
                        </Picker>
                    </View>
                </ScrollView>
            </View>
            <View style={{ paddingTop: 230, paddingLeft: 40 }}>
                <Btn
                    Press={handleLogout}
                    textColor='rgba(255, 255, 255, 1)'
                    bgColor={darkGreen}
                    btnLabel='Logout'
                />
            </View>
        </Backgroundfive>
    );
};

export default Setting;
