// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcf0hGCzT7B1KwsWyLXRfXhYOpdphz_0Q",
  authDomain: "work-place-d4d51.firebaseapp.com",
  projectId: "work-place-d4d51",
  storageBucket: "work-place-d4d51.appspot.com",
  messagingSenderId: "921315934935",
  appId: "1:921315934935:web:be83f28fd7a15ae0e66692",
  measurementId: "G-RPFP46WFLX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);