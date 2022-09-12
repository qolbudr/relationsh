import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNqN9Oz8YPMqxp_g5RObI1BOCMdwAO7BA",
  authDomain: "relationsh-26e17.firebaseapp.com",
  projectId: "relationsh-26e17",
  storageBucket: "relationsh-26e17.appspot.com",
  messagingSenderId: "354646312089",
  appId: "1:354646312089:web:8473ff59f35e306f316408"
};

initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()