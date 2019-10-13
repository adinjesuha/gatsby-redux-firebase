import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: "gatsby-firebase-redux.firebaseapp.com",
  databaseURL: "https://gatsby-firebase-redux.firebaseio.com",
  projectId: "gatsby-firebase-redux",
  storageBucket: "gatsby-firebase-redux.appspot.com",
  messagingSenderId: "799298956135",
}

// Initialize Firebase
firebase.initializeApp(config)
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
