import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

firebase.initializeApp({
  apiKey: "AIzaSyBrSrDPQI6YoUdn64eg1sw2ZgNwUy2CAoo",
  authDomain: "az-sint-lucas-gent.firebaseapp.com",
  databaseURL: "https://az-sint-lucas-gent.firebaseio.com",
  projectId: "az-sint-lucas-gent",
  storageBucket: "az-sint-lucas-gent.appspot.com",
  messagingSenderId: "579241304515",
  appId: "1:579241304515:web:5c15f67d448644ddbd5d76",
  measurementId: "G-XWZ43495J2"
})

const db = firebase.database()
const storage = firebase.storage()

export {
  db,
  storage,
  firebase
}