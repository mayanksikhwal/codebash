import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCGCKR8jtiwGzul4exX3mLWwVEOaK1_ESY",
	authDomain: "codebash-b9407.firebaseapp.com",
	projectId: "codebash-b9407",
	storageBucket: "codebash-b9407.appspot.com",
	messagingSenderId: "559320478359",
	appId: "1:559320478359:web:eea4cc914fbff9dd902fd2"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
