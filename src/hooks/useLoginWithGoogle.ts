import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from './useAuthContext'; // useAuthContext is a custom hook that returns the auth context (used to dispatch action to login or logout user)
import { getFirebase } from '../lib/firebase/config';

const { auth } = getFirebase();

export const useLoginWithGoogle = () => {
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const provider = new GoogleAuthProvider();

    const loginWithGoogle = async () => {

        setIsPending(true);

        setError(null);

        try {
            // await = nothing further will happen until this function gets a response (this signs the user in from Firebase)
            const res = await signInWithPopup(auth, provider);

            // dispatch action to logout user -- payload is null is optional since it'll become null by default
            dispatch({ type: 'LOGIN', payload: res.user });

            // update state as long as the user hasn't canceled (navigate away from page/component)
            setIsPending(false);
            setError(null);
        } catch (err: any) {
            // --- err.message --- messageExample = 
            // 'Firebase: HTTP Cloud Function returned an error: {"error":{"message":"jmel19@gmail.com is not an authorized email. Only 3Q Digital and DEPT emails can be used to log in. Please contact Jason Melman for support if you believe this is an error.","status":"INVALID_ARGUMENT"}} (auth/internal-error).'
            console.log("Auth Error Message: ", err.message);
            // Extract the error "message" property from the error object
            const message = err.message.match(/(?<=message":").+?(?=")/)?.[0];
            // Update the state with the error message & set isPending to false
            setError(message || 'An error occurred.');
            setIsPending(false);
        }
    }

    return { error, isPending, loginWithGoogle };
}
