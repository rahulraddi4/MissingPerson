import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import Backgroundthree from './Backgroundthree';
import Field2 from './Field2';
import { SafeAreaView } from 'react-native';
import Feed from './Feed';
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

    const navigation = useNavigation();

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
            const response = storage().ref(`/profile/${imageData.name}`);

            const put = await response.putFile(imageData.fileCopyUri);

            setFullImgRefPath(put.metadata.fullPath);
            const url = await response.getDownloadURL();

            setImgDownloadUrl(url);

            alert('Image Uploaded Successfully');
        } catch (err) {
            console.log(err);
        }
    };
    const deleteImage = async () => {
        try {
            const response = await storage().ref(fullImgRefPath).delete();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Backgroundthree>

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
                    {imageData ? (
                        <Image
                            source={{ uri: imageData.uri }}
                            style={{ height: 100, width: 100, marginBottom: 20 }}
                        />
                    ) : (
                        <Text>No Image Found</Text>
                    )}
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Button title="Select Image" onPress={() => pickImage()} />
                        <Button title="Upload Image" onPress={() => uploadImage()} />
                        <Button
                            title="Delete Image"
                            onPress={() => deleteImage()}
                            color="red"
                        />
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text>
                            Url = {imgDownloadUrl.length > 0 ? imgDownloadUrl : 'not found'}
                        </Text>
                    </View>

                    <Image source={{ uri: imgDownloadUrl }} style={{ height: 300, width: 300 }} />
                </View>
            </View>

        </Backgroundthree>
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

























/*import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { storageRef, storage } from '../firebase-config';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import Backgroundthree from './Backgroundthree';
import Field2 from './Field2';
import { SafeAreaView } from 'react-native';
import Feed from './Feed';
import { useNavigation } from '@react-navigation/native';

const Post = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [skinColor, setSkinColor] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [health, setHealth] = useState('');
    const [image, setImage] = useState(null);
    const navigation = useNavigation();

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
*/