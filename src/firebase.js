import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4PUxfo_znHlKyxUZAfycVEucdYAUvVMo",
  authDomain: "fir-736f2.firebaseapp.com",
  projectId: "fir-736f2",
  storageBucket: "fir-736f2.appspot.com",
  messagingSenderId: "34897708536",
  appId: "1:34897708536:web:58594306a992452bad020d",
  measurementId: "G-CBBFHQ5VNB"
});


const auth = firebase.auth();

export { auth }