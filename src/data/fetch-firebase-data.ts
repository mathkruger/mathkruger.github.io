import {
  getDocs,
  getFirestore,
  orderBy,
  query,
  collection,
} from "firebase/firestore";
import firebase from "./firebase";
import type { TranslatedData } from "../types/translated-data";

export async function fetchFirebaseData<TObject>(
  collectionName: string,
  language?: "en" | "pt-BR",
  single?: boolean
): Promise<TObject[]> {
  const db = getFirestore(firebase);
  const q = query(collection(db, collectionName), orderBy("order", "asc"));

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return [];
  }

  const data = snapshot.docs.map((x) => x.data());

  if (language) {
    const translatedData = (data as TranslatedData<TObject>[]).map((x) => x[language]);
    return translatedData;
  }

  return data as TObject[];
}
