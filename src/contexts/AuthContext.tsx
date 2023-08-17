import React from 'react';
import type { ReactNode } from 'react';
import { getFirebase } from '../lib/firebase/config';

const { auth } = getFirebase();

type User = any; // This is a placeholder. 

interface AuthState {
    user: User | null;
    authIsReady: boolean;
}

export type AuthAction = 
    | { type: 'LOGIN', payload: User }
    | { type: 'LOGOUT',  payload: null }
    | { type: 'AUTH_IS_READY', payload: User };


type AuthContextType = {
    user: User | null;
    authIsReady: boolean;
    dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        case 'AUTH_IS_READY':
            return { user: action.payload, authIsReady: true };
        default:
            return state;
    }
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = React.useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

    React.useEffect(() => {
        const unsub = auth.onAuthStateChanged((user: User) => {
            dispatch({ type: 'AUTH_IS_READY', payload: user });
            unsub();
        })
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}
