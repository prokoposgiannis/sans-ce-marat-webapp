import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, query, where, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { CardContent } from "@/app/components/types/types"

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


async function fetchDateData(date:string): Promise<CardContent[]> {
  
  const q = query(collection(db, "events"), where("day", "==", date));
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
  const cnt: CardContent[] = [];
  querySnapshot.forEach((doc) => {
  cnt.push(doc.data() as CardContent );
  });

return cnt
}

export { setDoc, doc, db, fetchDateData }