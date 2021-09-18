import firebase from "firebase";
import "firebase/auth";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBHroPNZwMNpQL5-H0Lme53JyV26oZS6Y0",
	authDomain: "reactjsgeekbrainslearn.firebaseapp.com",
	projectId: "reactjsgeekbrainslearn",
	storageBucket: "reactjsgeekbrainslearn.appspot.com",
	messagingSenderId: "805706040872",
	appId: "1:805706040872:web:77d1258c6b4806db3b971d",
	measurementId: "G-X716TERC30"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth
const db = firebase.database();
export {auth, db};