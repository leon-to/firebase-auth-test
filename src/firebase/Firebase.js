// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import app from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_9IdvLYayUYXUdzi35zbwi943gSVrrCY",
    authDomain: "auth-test-34576.firebaseapp.com",
    databaseURL: "https://auth-test-34576.firebaseio.com",
    projectId: "auth-test-34576",
    storageBucket: "auth-test-34576.appspot.com",
    messagingSenderId: "528510603604",
    appId: "1:528510603604:web:39848fd3ccae862f6c38c1"
};

export default class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
    }
}
