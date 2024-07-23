import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBYoQfP0lwGVfpWz7-q8vuG6uNNJmNWikY",
    authDomain: "music-app-ab52d.firebaseapp.com",
    databaseURL: "https://music-app-ab52d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "music-app-ab52d",
    storageBucket: "music-app-ab52d.appspot.com",
    messagingSenderId: "626829788207",
    appId: "1:626829788207:web:edf41c76aaaddde85cf2da"
};

const app = initializeApp(firebaseConfig);

export const dbFirebase = getDatabase(app);