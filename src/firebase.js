import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCbBIUHMH-oSEsF4SXF2fAIgR0PjBPL9pI",
    authDomain: "facebook-ver2.firebaseapp.com",
    projectId: "facebook-ver2",
    storageBucket: "facebook-ver2.appspot.com",
    messagingSenderId: "966762090869",
    appId: "1:966762090869:web:c37460f463662bac9ec33c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db