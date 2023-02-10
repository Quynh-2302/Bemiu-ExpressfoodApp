import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCBz4aeXdC2WHRcy4_fJfd7RIby3NjS9DU",
    authDomain: "expessfood-v1.firebaseapp.com",
    projectId: "expessfood-v1",
    storageBucket: "expessfood-v1.appspot.com",
    messagingSenderId: "489523348139",
    appId: "1:489523348139:web:52400ccdb2bc5ff931adee"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const db = getFirestore(app)
const auth = getAuth(app)
const database = getDatabase(app);

export { auth, db, database };