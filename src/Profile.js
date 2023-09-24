import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Btn from "./Btn";
import { darkGreen } from "./constants";
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from "@react-navigation/native";
import database from '@react-native-firebase/database';
import Backgroundone from "./Background/Backgroundone";
import Backgroundfive from "./Background/Backgroundfive";

const Profile = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userUid = Auth().currentUser.uid;
        database()
            .ref(`/Users/${userUid}`)
            .once('value')
            .then(snapshot => {
                const data = snapshot.val();
                setUserData(data);
            })
            .catch(error => {
                console.log("Error fetching user data:", error);
            });
    }, []);

    const handleLogout = async () => {
        await Auth().signOut();
        navigation.dispatch(StackActions.popToTop());
    };

    return (
        <Backgroundfive>
            <View style={styles.container}>
                <Text style={styles.headerText}>Profile</Text>
                <View style={styles.userDataContainer}>
                    {userData && (
                        <>
                            <View style={styles.userInfo}>
                                <Text style={styles.label}>Name:</Text>
                                <Text style={styles.info}>{userData.name}</Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.label}>Contact Number:</Text>
                                <Text style={styles.info}>{userData.contactNumber}</Text>
                            </View>
                        </>
                    )}
                    <View style={styles.userInfo}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.info}>{Auth().currentUser.email}</Text>
                    </View>
                </View>
                <Btn
                    Press={handleLogout}
                    textColor={darkGreen}
                    bgColor='rgba(255, 255, 255, 0.70)'
                    btnLabel='Logout'
                />
            </View>
        </Backgroundfive>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 160,
        paddingLeft: 25
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userDataContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
        width: 340,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    userInfo: {
        marginBottom: 10,
        marginVertical: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'green'
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
});

export default Profile;
