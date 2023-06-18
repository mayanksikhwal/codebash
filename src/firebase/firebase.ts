import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBuHTTWdxmaXK9wQnMxtx2rIFoL4w5fi30",
	authDomain: "codebash-78f0c.firebaseapp.com",
	projectId: "codebash-78f0c",
	storageBucket: "codebash-78f0c.appspot.com",
	messagingSenderId: "231314879287",
	appId: "1:231314879287:web:09b9213fd4d96933f9e0b2"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
