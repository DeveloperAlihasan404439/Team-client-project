import { useEffect } from "react";
import { useState } from "react";
import app  from "../firebase/firebase.config";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app)
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

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axios.post('https://server-side-bice.vercel.app/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)

                        }
                    })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false)

            }
            
            setUser(currentUser)
            
        })
        return () => {
            return unsubsCribe();
        }
        
    }, [axios])

    const authInfo = {
        user,
        createUser,
        singIn,
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