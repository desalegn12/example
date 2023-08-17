import { initializeApp, getApps } from "firebase/app";
import { getFirestore, Timestamp, connectFirestoreEmulator, enableMultiTabIndexedDbPersistence } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

type Props = {
    firebaseApp: any;
    auth: any;
    firestore: any;
    storage: any;
    functions: any;
    timestamp: any;
    provider: any;
}


const FIREBASE_API = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


function initialize() {
    const firebaseApp = initializeApp(FIREBASE_API);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);
    const functions = getFunctions(firebaseApp);
    //timestamp
    const timestamp = Timestamp.now();
    //google auth provider
    const provider = new GoogleAuthProvider();
    return { firebaseApp, auth, firestore, storage, functions, timestamp, provider };
}

function connectToEmulators({ firebaseApp, auth, firestore, storage, functions, timestamp, provider }: Props) {
    return { firebaseApp, auth, firestore, storage, functions, timestamp, provider };
}

function enableOffline({ firestore, firebaseApp, auth, storage, functions, timestamp, provider }: Props) {
    // enableMultiTabIndexedDbPersistence(firestore);
    return { firestore, firebaseApp, auth, storage, functions, timestamp, provider };
}

export function getFirebase() {
    const existingApp = getApps().at(0);
    if(existingApp) return initialize();
    const services = connectToEmulators(initialize());
    return enableOffline(services);
}