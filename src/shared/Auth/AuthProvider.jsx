import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "./Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null)
    const[loading, setLoading] =useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const singIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const githubUser = (githubProvider)=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
           setUser(currentUser)
            
        })
        return () => {
            return unsubsCribe();
        }
        
    }, [])

    const authInfo = {
        user,
        createUser,
        singIn,
        githubUser,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;