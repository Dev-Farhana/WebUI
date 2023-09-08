  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import {
		getAuth,
		createUserWithEmailAndPassword,
		signInWithEmailAndPassword,
		onAuthStateChanged,
		signOut,
	} from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';

  import {
		getFirestore,
		doc,
		setDoc,
		getDoc,
		updateDoc,
	} from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';

const firebaseConfig = {
	apiKey: "AIzaSyAZm3nrnwgZerrSrKsJzbOQvk5LWQxHu0A",
	authDomain: "bp-app-e9d14.firebaseapp.com",
	databaseURL: "https://bp-app-e9d14-default-rtdb.firebaseio.com",
	projectId: "bp-app-e9d14",
	storageBucket: "bp-app-e9d14.appspot.com",
	messagingSenderId: "1097391288638",
	appId: "1:1097391288638:web:92bb8c89424f374139fc6f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
  
export {
	app,
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	doc,
	setDoc,
	db,
	getDoc,
	updateDoc,
};