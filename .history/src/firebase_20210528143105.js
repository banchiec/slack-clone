import firebase from "firebase" 


const firebaseConfig = {
  apiKey: "AIzaSyAKo3rWpOGZixGrpZmpI_kW5OgvoVQzYYk",
  authDomain: "slack-clone-abf0e.firebaseapp.com",
  projectId: "slack-clone-abf0e",
  storageBucket: "slack-clone-abf0e.appspot.com",
  messagingSenderId: "804755293062",
  appId: "1:804755293062:web:841b0ef3351a8cfdfbe207"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() 
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export  { auth, provider, db }