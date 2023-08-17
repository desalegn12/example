// import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import React, { Dispatch } from 'react';
import { signOut } from "firebase/auth";
import { getFirebase } from '../lib/firebase/config';
import { useAuthContext } from './useAuthContext';
import { AuthAction } from '../contexts/AuthContext';

// Extract the `auth` object from Firebase config
const { auth } = getFirebase();


// Define the type for the return of `useLogout` function
type LogoutReturnType = {
    error: string | null;
    isPending: boolean;
    logout: () => Promise<void>;
}

export const useLogout = (): LogoutReturnType => {
    const [isCancelled, setIsCancelled] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [isPending, setIsPending] = React.useState(false);
    
    // Infer the type of dispatch from `useAuthContext`
    const { dispatch }: { dispatch: Dispatch<AuthAction> } = useAuthContext();

    const logout = async () => {
        setIsPending(true);
        setError(null);

        try {
            await signOut(auth);
            dispatch({ type: 'LOGOUT', payload: null });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);            
            }
        } catch (err: any) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    React.useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, logout }
}
