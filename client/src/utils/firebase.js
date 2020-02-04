import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBrSrDPQI6YoUdn64eg1sw2ZgNwUy2CAoo',
    projectId: 'az-sint-lucas-gent'
  })
}

const db = firebase.firestore()

export { db }
