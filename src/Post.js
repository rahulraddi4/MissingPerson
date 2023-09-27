import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, ScrollView, ActivityIndicator } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import Background from './Background';
import Field2 from './Field2';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';


const Post = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [skinColor, setSkinColor] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [health, setHealth] = useState('');
    const [imageData, setImageData] = useState('');
    const [fullImgRefPath, setFullImgRefPath] = useState('');
    const [imgDownloadUrl, setImgDownloadUrl] = useState('');
    const [postId, setPostId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const writeToDatabase = async () => {
        try {
            setIsLoading(true);

            const data = {
                name,
                age,
                skinColor,
                address,
                contactNumber,
                health,
                imageUrl: imgDownloadUrl,
            };
            const databaseRef = database().ref('/missingPersons');
            const newPostRef = await databaseRef.push();
            const postId = newPostRef.key;
            setPostId(postId);
            const storageRef = storage().ref(`/post/${postId}`);
            await storageRef.child('data.json').putString(JSON.stringify(data), 'raw');
            const imageResponse = storageRef.child(`${imageData.name}`);
            const imagePut = await imageResponse.putFile(imageData.fileCopyUri);
            setFullImgRefPath(imagePut.metadata.fullPath);
            const imageUrl = await imageResponse.getDownloadURL();
            setImgDownloadUrl(imageUrl);
            setIsLoading(false);
            alert('Data and Image Uploaded Successfully');
            navigation.navigate('Feed');
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };
    const pickImage = async () => {
        try {
            const response = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
                copyTo: "cachesDirectory"
            });
            console.log(response);
            setImageData(response);
        } catch (err) {
            console.log(err);
        }
    };
    const uploadImage = async () => {
        try {

            writeToDatabase();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Background source={require("./assets/Background3.jpg")}>

            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Enter Missing Person Details</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Feed') }} style={styles.arrowContainer}>
                        <Image
                            source={require('D:/Kittu/MissingPerson_App/assets/icons/arrow.png')}
                            resizeMode='contain'
                            style={{
                                width: 40, height: 40, paddingLeft: 120
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    <Field2 placeholder="Full Name" value={name} onChangeText={value => setName(value)} />
                    <Field2 placeholder="Age" value={age} keyboardType="number-pad" onChangeText={value => setAge(value)} />
                    <Field2 placeholder="Skin Color" value={skinColor} onChangeText={value => setSkinColor(value)} />
                    <Field2 placeholder="Address" value={address} onChangeText={value => setAddress(value)} />
                    <Field2 placeholder="Contact Number" keyboardType="number-pad" value={contactNumber} onChangeText={value => setContactNumber(value)} />
                    <Field2 placeholder="Any Health Condition(If there's Nothing, Type NO)" value={health} onChangeText={value => setHealth(value)} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="blue" />
                    ) : (
                        <>
                            {imageData ? (
                                <Image
                                    source={{ uri: imageData.uri }}
                                    style={{ height: 100, width: 100, marginBottom: 20 }}
                                />
                            ) : (
                                <Text style={{ paddingRight: 60, paddingBottom: 20, color: 'white' }}>No Image Found</Text>
                            )}

                            <View
                                style={{
                                    width: '80%',
                                    paddingRight: 60,
                                    justifyContent: 'space-around',
                                }}>
                                <Button title="Select Image" onPress={() => pickImage()} />


                            </View>

                            <TouchableOpacity
                                onPress={() => uploadImage()}
                                style={styles.uploadButton}>
                                <Text style={styles.uploadButtonText}>UPLOAD</Text>
                            </TouchableOpacity>


                            <View style={{ marginTop: 30 }}>
                                <Text>
                                    Url = {imgDownloadUrl.length > 0 ? imgDownloadUrl : 'not found'}
                                </Text>
                            </View>

                            <Image source={{ uri: imgDownloadUrl }} style={{ height: 300, width: 300 }} />
                        </>
                    )}
                </View>

            </View>

        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    arrowContainer: {
        paddingRight: 20,
    },
    form: {
        marginBottom: 20,
        marginRight: 30
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
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
        marginRight: 60
    },
    uploadButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default Post;














