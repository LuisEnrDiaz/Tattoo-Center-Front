import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    projectId: 'prueba-4f07b',
    appId: '1:517152494180:web:d719c3873fcb986af8c571',
    storageBucket: 'prueba-4f07b.appspot.com',
    locationId: 'europe-west3',
    apiKey: 'AIzaSyBBbWr82CEjwWfKEHDm3JSFVGyGVPalFJM',
    authDomain: 'prueba-4f07b.firebaseapp.com',
    messagingSenderId: '517152494180',
});
