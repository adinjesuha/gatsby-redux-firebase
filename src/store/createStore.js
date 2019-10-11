import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"
// Config forebase with redux
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import firebase from "../service/firebase"

export default preloadedState => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase),
      reactReduxFirebase(firebase, {
        useFirestoreForProfile: true,
        userProfile: "users",
      })
    ),
    preloadedState
  )
}
