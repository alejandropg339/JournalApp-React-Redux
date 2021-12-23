import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCd14iHOR43tYpq4lyIkEcRUdk5qUdLybw",
  authDomain: "react-app-course-a58e4.firebaseapp.com",
  projectId: "react-app-course-a58e4",
  storageBucket: "react-app-course-a58e4.appspot.com",
  messagingSenderId: "262859059158",
  appId: "1:262859059158:web:659daf184f6f8d08433e77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}