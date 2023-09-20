import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { storageRef, storage } from '../firebase-config';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import Backgroundthree from './Backgroundthree';
import Field2 from './Field2';
import { SafeAreaView } from 'react-native';

const Post = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [skinColor, setSkinColor] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [health, setHealth] = useState('');
    const [image, setImage] = useState(null);

    const imagePicker = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
            });

            if (!result.didCancel) {
                setImage(result.assets[0].uri);
                handleUpload(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };

    const handleUpload = async (imageUri) => {
        try {
            const response = await fetch(imageUri);

            // Check if the response status code is within the expected range [200, 599]
            if (!response.ok) {
                throw new Error(`Failed to fetch image (Status: ${response.status})`);
            }

            const blob = await response.blob();

            const reference = storageRef(storage, 'images/RandomImages');
            await uploadBytes(reference, blob);
            console.log('Uploaded Image');

            // You can also get the download URL if needed
            const downloadURL = await getDownloadURL(reference);
            console.log('Download URL:', downloadURL);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <Backgroundthree>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Enter Missing Person Details</Text>
                    <View style={styles.form}>
                        <Field2 placeholder="Full Name" value={name} onChangeText={value => setName(value)} />
                        <Field2 placeholder="Age" value={age} keyboardType="number-pad" onChangeText={value => setAge(value)} />
                        <Field2 placeholder="Skin Color" value={skinColor} onChangeText={value => setSkinColor(value)} />
                        <Field2 placeholder="Address" value={address} onChangeText={value => setAddress(value)} />
                        <Field2 placeholder="Contact Number" keyboardType="number-pad" value={contactNumber} onChangeText={value => setContactNumber(value)} />
                        <Field2 placeholder="Any Health Condition(If there's Nothing, Type NO)" value={health} onChangeText={value => setHealth(value)} />
                    </View>
                    <SafeAreaView>
                        <TouchableOpacity style={styles.imagePickerButton} onPress={imagePicker}>
                            <Text style={styles.imagePickerText}>Select Image</Text>
                        </TouchableOpacity>
                        {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
                    </SafeAreaView>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                        <Text style={styles.uploadButtonText}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Backgroundthree>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 20,
        paddingRight: 20
    },
    form: {
        marginBottom: 20,
    },
    imagePickerButton: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
    },
    imagePickerText: {
        color: 'white',
        fontWeight: 'bold',
    },
    selectedImage: {
        width: 200,
        height: 200,
        marginTop: 10,
        alignSelf: 'center',
    },
    uploadButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    uploadButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Post;
