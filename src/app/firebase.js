import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKogQXuPGvPikPFiDhByRAXnKz9NCuCHs",
  authDomain: "sans-ce-marat.firebaseapp.com",
  projectId: "sans-ce-marat",
  storageBucket: "sans-ce-marat.appspot.com",
  messagingSenderId: "916341505037",
  appId: "1:916341505037:web:f3094ecbcf439375a6a944",
  measurementId: "G-JC3EVQ7FLF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const q = query(collection(db, "events"), where("day", "==", "2008"));

const querySnapshot = await getDocs(q);
const cnt = [];
querySnapshot.forEach((doc) => {
  cnt.push(doc.data());
});


export {setDoc, doc, db, cnt}
