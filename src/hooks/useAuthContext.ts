import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if (!context) { // shouldn't be a problem, as the context is wrapped around entire app in index.js
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    
    return context;
}