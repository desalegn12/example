import { 
    getFirestore,
    query,
    orderBy,
    onSnapshot,
    deleteDoc,
    collection,
    getDoc, 
    getDocs, 
    addDoc,
    setDoc,
    doc, 
    where,
    serverTimestamp, 
    increment,
    runTransaction
} from "firebase/firestore";

import { getFirebase } from './config';

const { firestore } = getFirebase()

type SetDocProps = {
    collectionId: string;
    docId?: string;
    data: any;
}

export const setDocInCollectionNoUpdatedTimestamp = async ({ collectionId, docId, data}: SetDocProps) => {
    try {
        const docRef = await setDoc(
            docId ? doc(firestore, collectionId, docId) : doc(collection(firestore, collectionId)),
            data, 
            { merge: true }
        ); 

        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw new Error(`Error adding document: ${e}`);
    }
};


export const setDocInCollection = async ({ collectionId, docId, data}: SetDocProps) => {
    try {
        const dataWithTimestamp = { ...data, updated: serverTimestamp() };
        const docRef = await setDoc(
            docId ? doc(firestore, collectionId, docId) : doc(collection(firestore, collectionId)),
            dataWithTimestamp, 
            { merge: true }
        ); 

        return docRef;
    } catch (e) {
        console.error("Error updating document: ", e);
        throw new Error(`Error updating document: ${e}`);
    }
};


type DeleteDocProps = {
    collectionId: string;
    docId: string;
}

export const deleteDocInCollection = async ({collectionId, docId}: DeleteDocProps) => {
    try{
        if(docId) {
            await deleteDoc(doc(firestore, collectionId, docId));
            return `Document with ID ${docId} successfully deleted!`;
        } else {
            throw new Error('No docId provided');
        }
    } catch(e){
        console.error("Error deleting document: ", e);
        throw new Error(`Error deleting document: ${e}`);
    }
};
