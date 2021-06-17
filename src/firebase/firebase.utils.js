import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDirFr6EqC1a24x7YLcIVSwpyN2gSFD2Uc',
  authDomain: 'crwn-db-6023f.firebaseapp.com',
  projectId: 'crwn-db-6023f',
  storageBucket: 'crwn-db-6023f.appspot.com',
  messagingSenderId: '148287211791',
  appId: '1:148287211791:web:323d5e38ef187c5790d67a',
  measurementId: 'G-4JW5DESSEE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
