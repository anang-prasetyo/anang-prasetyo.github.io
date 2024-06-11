// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function firebaseConfig(){
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const _firebaseConfig = {
    apiKey: "AIzaSyC1-zzZXzaRPWIL20QnveHY4ygvdXBS1IQ",
    authDomain: "anangweb-d6ffe.firebaseapp.com",
    projectId: "anangweb-d6ffe",
    storageBucket: "anangweb-d6ffe.appspot.com",
    messagingSenderId: "412005272417",
    appId: "1:412005272417:web:d2f6540e6fe48597f95320",
    measurementId: "G-37ZWSTDLN6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(_firebaseConfig);
  
  // const analytics = getAnalytics(app);
  return{ firebaseApp }
}