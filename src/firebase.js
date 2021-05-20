import firebase from 'firebase';


const firebaseConfig = {
    piKey: "AIzaSyAlovUmXGkiJIF5aunOTECpTgPrs53LImY",
    authDomain: "material-hub.firebaseapp.com",
    projectId: "material-hub",
    storageBucket: "material-hub.appspot.com",
    messagingSenderId: "599415253706",
    appId: "1:599415253706:web:a34dd98cc2dddae117e233"
};
const myApp = firebase.initializeApp(firebaseConfig);
export const auth = myApp.auth();