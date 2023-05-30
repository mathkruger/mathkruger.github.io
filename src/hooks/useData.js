import { getDocs, getFirestore, orderBy, query, collection } from "firebase/firestore";
import firebaseApp from "../config/firebase";
import { useEffect, useState } from "react";

function useData(collectionName, language = null) {
    const [data, setData] = useState([]);

    const getFirebaseData = async (collectionName, language = null) => {
        const db = getFirestore(firebaseApp);
        const q = query(
            collection(db, collectionName),
            orderBy("order", "asc")
        );
    
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            setData([]);
        } else {
            const data = snapshot.docs.map(x => x.data());

            if (language) {
                const translatedData = data.map(x => x[language]);
                setData(translatedData);
            } else {
                setData(data);
            }
        }
    }


    useEffect(() => {
        getFirebaseData(collectionName, language);
    }, [collectionName, language]);

    return {
        data
    };
}

export default useData;