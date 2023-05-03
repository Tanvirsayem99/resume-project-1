import React, { createContext } from 'react';
import { useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithPopup, GoogleAuthProvider, GithubAuthProvider, updateProfile} from "firebase/auth";
import { useEffect } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

const Auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitprovider)
    }
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false);
        })
        return () =>{
             unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleLogin,
        githubLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;