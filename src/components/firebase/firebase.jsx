import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBl88UVYmyIQ_HrG7F1i1RZemyqnI34dg0",
    authDomain: "dream-clothing-shop.firebaseapp.com",
    databaseURL: "https://dream-clothing-shop.firebaseio.com",
    projectId: "dream-clothing-shop",
    storageBucket: "dream-clothing-shop.appspot.com",
    messagingSenderId: "931588094834",
    appId: "1:931588094834:web:8d66307147780a4a46fbeb",
    measurementId: "G-PHQSHY8QSZ"
  };

  export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email, photoURL } = userAuth;
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          photoURL,
          ...additionaldata
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;