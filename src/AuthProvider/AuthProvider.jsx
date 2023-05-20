import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext('');
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const newUser = (name, photoURL, email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const provider = new GoogleAuthProvider();

    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    const signUpWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInWithGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
         setUser(loggedInUser);
         setIsLoading(false);
        })
        return () => {
         unsubscribe();
        }
     }, [])

    const authBank = {
        user,
        isLoading,
        newUser,
        signIn,
        logOut,
        signUpWithGoogle,
        signInWithGoogle,

    }
    return (
        <AuthContext.Provider value={authBank}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;