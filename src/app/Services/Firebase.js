import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);
const analytics = getAnalytics(firebaseApp);
export {auth, db, analytics}