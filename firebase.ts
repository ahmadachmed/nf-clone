
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8IXeqFO3mxSuSdZb7UvptWI4hkQZH5U",
  authDomain: "nf-clone-c3c6f.firebaseapp.com",
  projectId: "nf-clone-c3c6f",
  storageBucket: "nf-clone-c3c6f.appspot.com",
  messagingSenderId: "455722964857",
  appId: "1:455722964857:web:fe5977a7a9ca8d4b7b41a8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }