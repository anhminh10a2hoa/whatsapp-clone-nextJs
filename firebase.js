import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrC0StXZRwq9yM7CNQu7ajiU_t4wBVG5s",
  authDomain: "whatsapp-2-bd1a1.firebaseapp.com",
  projectId: "whatsapp-2-bd1a1",
  storageBucket: "whatsapp-2-bd1a1.appspot.com",
  messagingSenderId: "997297082541",
  appId: "1:997297082541:web:d762e494c919917df93624"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };