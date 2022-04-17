// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, addDoc, collection} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDtaleDndsqYWBvgabGQQv0mxnAw1fytsQ",
  authDomain: "extension-8c356.firebaseapp.com",
  projectId: "extension-8c356",
  storageBucket: "extension-8c356.appspot.com",
  messagingSenderId: "594844189881",
  appId: "1:594844189881:web:6c796348d2b65c91128768",
  measurementId: "G-520DNN90ZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app);

export const updateRecord = async (collection, id, data) => {
  const newData = {
    ...data,
    updatedAt: new Date().toISOString()
  }
  const docRef = doc(fdb, collection, id);
  const document = await setDoc(docRef, newData);
  return {
    data: newData
  };
}
export const createRecord = async (collect, data) => {
  const newData = {
    ...data,
    createdAt: new Date().toISOString()
  }
  const document = await addDoc(collection(fdb, collect), newData);
  return {
   
    data: {
      id: document.id,
      ...newData
    }
  }
}


const analytics = getAnalytics(app);
