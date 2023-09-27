import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Feed from '../Feed';
import Stats from '../Stats';
import Adding from '../Adding';
import Profile from '../Profile';
import Setting from '../Setting';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}>
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#E32F45',
                    ...style.shadow,
                }}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: -3.5,
        elevation: 7,
    },
});

// Define your screen options separately
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 90,
        ...style.shadow,
    },
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={screenOptions} // Pass the screenOptions here
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>FEED</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/stats.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>STATS</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Adding"
                component={Adding}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/add.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: '#fff',
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 11 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/setting.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>SETTING</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/profile.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 10 }}>PROFILE</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export { TabNavigator };



function PartialTabNavigator() {
    // You can remove the { Feed, Stats, Setting } destructuring here
    return (
        <Tab.Navigator
            screenOptions={screenOptions} // Pass the screenOptions here
        >
            <Tab.Screen
                name="Feed2"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>FEED</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Stats2"
                component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/stats.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>STATS</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Setting2"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 11 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/setting.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>SETTING</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export { PartialTabNavigator };
























/*
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}>
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#E32F45',
                    ...style.shadow,
                }}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: -3.5,
        elevation: 7,
    },
});

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow,
                },
            }}>
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow,
                },
            }}
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>FEED</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/stats.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>STATS</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Adding"
                component={Adding}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/add.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: '#fff',
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 11 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/setting.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>SETTING</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/profile.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 10 }}>PROFILE</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export { TabNavigator };

const TabConfigurations = {
    Feed: {
        name: 'Feed',
        component: Feed,
    },
    Stats: {
        name: 'Stats',
        component: Stats,
    },
    Adding: {
        name: 'Adding',
        component: Adding,
    },
    Setting: {
        name: 'Setting',
        component: Setting,
    },
    Profile: {
        name: 'Profile',
        component: Profile,
    },
};

function FullTabNavigator() {
    return (
        <Tab.Navigator>
            {Object.values(TabConfigurations).map((config) => (
                <Tab.Screen
                    key={config.name}
                    name={config.name}
                    component={config.component}
                />
            ))}
        </Tab.Navigator>
    );
}

function PartialTabNavigator() {
    const { Feed, Stats, Setting } = TabConfigurations;

    return (
        <>
            <Feed.component />
            <Stats.component />
            <Setting.component />
        </>
    );
}

export { FullTabNavigator, PartialTabNavigator };*/




















/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Main from '../Main';
import Post from '../Post';
import Adding from '../Adding';
import Profile from '../Profile';
import Stats from '../Stats';
import Setting from '../Setting';
import Feed from '../Feed';

import { useNavigation, StackActions } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}>
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#E32F45',
                    ...style.shadow,
                }}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: -3.5,
        elevation: 7,
    },
});

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow,
                },
            }}>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>FEED</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/stats.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>STATS</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Adding"
                component={Adding}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/add.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: '#fff',
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 11 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/setting.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 11 }}>SETTING</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('D:/Kittu/MissingPerson_App/assets/icons/profile.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94',
                                }}
                            />
                            <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 10 }}>PROFILE</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export { TabNavigator };
export const TabConfigurations = {
    Feed: {
        name: 'Feed',
        component: Feed,
    },
    Stats: {
        name: 'Stats',
        component: Stats,
    },
    Adding: {
        name: 'Adding',
        component: Adding,
    },
    Setting: {
        name: 'Setting',
        component: Setting,
    },
    Profile: {
        name: 'Profile',
        component: Profile,
    },
};*/








