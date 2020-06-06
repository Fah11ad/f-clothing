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
//2 to store user details in firebase when sign in //
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // to understand what Ref & Snapshot
  // const collectionRef = firestore.collection('users')
  // console.log(collectionRef);

  const snapShot = await userRef.get();

  // to understand what Ref & Snapshot
  // const collectionSnapShot = await collectionRef.get()
  // console.log({collection: collectionSnapShot.docs.map(doc => doc.data())})

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
// END //

//ADD SHOP DATA to Firebase - 1 -
export const addCollectioAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey); //get Ref from firestore and pass collectionKey
  // console.log(collectionRef);
  //ADD SHOP DATA to Firebase - 1 - END //

  //ADD SHOP DATA to Firebase - 5 - add objectsToAdd to the collecionRef
  const batch = firestore.batch(); // use it to send the data as one request after collect all set data, if some data not received will fire an error
  objectsToAdd.forEach((obj) => {
    // call the function in each element
    const newDocRef = collectionRef.doc(); // means give me newDocRef in this collectionRef and randomly generate an Id for me
    // console.log(newDocRef);
    batch.set(newDocRef, obj); // loop through this array 'obj' and batch these calls togather
  });

  return await batch.commit(); // fire of the batch call
};

//Bring SHOP Data to our App - 3 -
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  //Bring SHOP Data to our App - 4 - Convert the array to object to store it in our reducer
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}); // 2nd parameter is empty as initial accumulator is empty
};

//Bring SHOP Data to our App  END ///

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
