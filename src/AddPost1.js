import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { storageRef, storage } from "../firebase-config";
import { launchImageLibrary } from "react-native-image-picker";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import Backgroundthree from "./Backgroundthree";

const AddPost1 = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const imagePicker = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: "photo",
                quality: 1,
            });

            if (!result.didCancel) {
                setImage(result.assets[0].uri);
                handleUpload(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Error picking image:", error);
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
            console.error("Error uploading image:", error);
        }
    };

    return (
        <Backgroundthree>
            <SafeAreaView>
                <TouchableOpacity onPress={imagePicker}>
                    <Text style={{ color: 'white' }}>Image Picker</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Backgroundthree>
    );
};

export default AddPost1;
