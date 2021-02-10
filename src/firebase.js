import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB68iyhJyIHrvKkbjdWCWwuvJDpEWhzQL8",
    authDomain: "linkedin-clone-6cba3.firebaseapp.com",
    projectId: "linkedin-clone-6cba3",
    storageBucket: "linkedin-clone-6cba3.appspot.com",
    messagingSenderId: "150715299204",
    appId: "1:150715299204:web:f167bfd02793db793259d1",
    measurementId: "G-F1WEYCQ9G0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db , auth } ;