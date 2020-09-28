import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAI2ERdsKu1VPnQzhmQxXxCcnyDoyvm9Uc",
    authDomain: "prizart-2020.firebaseapp.com",
    databaseURL: "https://prizart-2020.firebaseio.com",
    projectId: "prizart-2020",
    storageBucket: "prizart-2020.appspot.com",
    messagingSenderId: "733020512357",
    appId: "1:733020512357:web:c53edd4089b6fbaf5a668c",
    measurementId: "G-47MFS5444Y"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();