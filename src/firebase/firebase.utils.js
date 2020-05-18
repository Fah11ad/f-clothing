import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4RJWR6Gso1mh6ucZ30EJGo5yQiouW9aI",
  authDomain: "f-clothing-db.firebaseapp.com",
  databaseURL: "https://f-clothing-db.firebaseio.com",
  projectId: "f-clothing-db",
  storageBucket: "f-clothing-db.appspot.com",
  messagingSenderId: "584643907769",
  appId: "1:584643907769:web:d59ea226a944f2f253cb68",
  measurementId: "G-SQ30ZY8078",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
