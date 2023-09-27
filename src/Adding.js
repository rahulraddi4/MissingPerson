import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Background from './Background';
import { green, bgColor } from './constants';

const Adding = ({ navigation }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);


    const handleConfirm = () => {

        navigation.navigate("Post");


        setShowConfirmation(false);
    };

    return (
        <Background source={require("./assets/Background3.jpg")}>
            <ScrollView>
                <View style={styles.container}>


                    <View style={styles.rulesContainer}>
                        <Text style={styles.rulesHeading}>Online Rules and Regulations:</Text>
                        <Text style={styles.rulesText}>By proceeding, you acknowledge and agree to abide by these rules and regulations.{' '}
                            <Text style={{ fontWeight: 'bold' }}>Missing Person Application</Text> is dedicated to
                            the safe and responsible use of data, with the primary goal of reuniting missing persons
                            with their families. Thank you for your cooperation in making our community a secure and
                            supportive space for all.
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => setShowConfirmation(true)}
                        style={styles.addButton}
                    >
                        <Text style={styles.addButtonText}>Add Post</Text>
                    </TouchableOpacity>

                </View>


                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showConfirmation}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>
                                Are you sure you want to proceed?
                            </Text>
                            <TouchableOpacity
                                onPress={() => setShowConfirmation(false)}
                                style={[styles.modalButton, styles.cancelButton]}
                            >
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleConfirm}
                                style={[styles.modalButton, { backgroundColor: green }]}
                            >
                                <Text style={styles.modalButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 140
    },
    addButton: {
        elevation: 6,
        backgroundColor: green,
        borderRadius: 100,
        alignItems: 'center',
        width: '80%',
        paddingVertical: 15,
        alignSelf: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        minWidth: 100,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'gray',
    },
    rulesContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
    },
    rulesHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rulesText: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default Adding;
