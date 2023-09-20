import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDvR42w4rJjFy0-IQi4Vf9nCmTw16uUpnk",
    authDomain: "missingperson-ad664.firebaseapp.com",
    projectId: "missingperson-ad664",
    storageBucket: "missingperson-ad664.appspot.com",
    messagingSenderId: "746030424954",

};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export { storageRef };