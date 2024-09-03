import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, query, where, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { CardContent } from "@/app/components/types/types"
import { config } from "dotenv";

config()

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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