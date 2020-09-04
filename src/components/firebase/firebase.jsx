import firebase from 'firebase';
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

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;