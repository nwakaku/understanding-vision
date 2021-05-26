import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'


const myApp = firebase.initializeApp({
    apiKey: "AIzaSyAlovUmXGkiJIF5aunOTECpTgPrs53LImY",
  authDomain: "material-hub.firebaseapp.com",
  projectId: "material-hub",
  storageBucket: "material-hub.appspot.com",
  messagingSenderId: "599415253706",
  appId: "1:599415253706:web:a34dd98cc2dddae117e233"
});

export const db = myApp.firestore()

export const auth = myApp.auth();

export default myApp