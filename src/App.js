import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  //Config
  apiKey: "AIzaSyCUCKCwdG20xSzFD5_IVtYWk4YwRiR1A7A",
    authDomain: "chat-f5015.firebaseapp.com",
    databaseURL: "https://chat-f5015.firebaseio.com",
    projectId: "chat-f5015",
    storageBucket: "chat-f5015.appspot.com",
    messagingSenderId: "756514560303",
    appId: "1:756514560303:web:c142737eab6775ea8fa9da"
})

const [user] = useAuthState(auth);

//Global Variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );

  // Function to sign into the application using Google Auth
  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
   // Button for Sign In
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
    // Function to allow users to Sign Out
    function SignOut() {
      return auth.currentUser && (
        // Buttton that calls the function to Sign Out only if user is signed in already
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
    }
  }

  function ChatRoom() {

  }
}

export default App;
