import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC7K3fdwFvnUHU8-2Q3Df0_XZwjTKdcyxo",
	authDomain: "codebash-48a90.firebaseapp.com",
	projectId: "codebash-48a90",
	storageBucket: "codebash-48a90.appspot.com",
	messagingSenderId: "1095624549121",
	appId: "1:1095624549121:web:21a21aa8d4cc590981f100"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
