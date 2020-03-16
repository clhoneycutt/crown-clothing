import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBMeiW0FcaymGbmWp0XJ8WVKbo66ZA0PyE",
  authDomain: "crown-clothing-b4660.firebaseapp.com",
  databaseURL: "https://crown-clothing-b4660.firebaseio.com",
  projectId: "crown-clothing-b4660",
  storageBucket: "crown-clothing-b4660.appspot.com",
  messagingSenderId: "247861402470",
  appId: "1:247861402470:web:ee3a11709a5bd97d9206a7"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;