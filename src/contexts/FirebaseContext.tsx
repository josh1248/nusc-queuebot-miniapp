import React, { createContext, useContext } from "react";
import { getFirestore, doc, setDoc, deleteDoc, collection, query, orderBy, limit, getDocs, Timestamp, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { toast } from "sonner";



// Your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyBDxCDJTJAp2J2tUPUeaFhJJA6skGTGLz4",
    authDomain: "telebot-28e2f.firebaseapp.com",
    databaseURL: "https://telebot-28e2f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "telebot-28e2f",
    storageBucket: "telebot-28e2f.firebasestorage.app",
    messagingSenderId: "479926466370",
    appId: "1:479926466370:web:c18425fa6a5cec5a42badb",
    measurementId: "G-11KSYC93DZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// FirebaseProvider component to wrap your app

export const addUser = async (name : string) => {
  try {
    const queueCollectionRef = collection(db, "queue");

    await addDoc(queueCollectionRef, {
      name: name,
      joinedAt: Timestamp.now()
    });

    toast.success(`Added ${name} to db.`);
  } catch (error) {
    toast.error(`Error adding ${name} to db. ${error}`);
    console.log(error);
  }
  
}

export const removeUser = async (name : string) => {
  try {
    await deleteDoc(doc(db, "queue", name));
    toast.success(`Removed ${name} from db.`);
  } catch (error) {
    toast.error(`Error removing ${name} from db.`);
    console.log(error);
  }
}

export const nextUser = async () => {
  try {
    const q = query(
      collection(db, 'queue'),
      orderBy('joinedAt'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const nextUser = querySnapshot.docs[0].data();
      toast.success(`Next user is ${nextUser.name}`);
    } else {
      toast.info("DB is empty.");
    }



  } catch (error) {
    toast.error(`Error retrieving next user from db. ${error}`);
    console.log(error);
  }
}
  
 