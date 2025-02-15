import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.init';

export const Context = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =  useState(true)
    // console.log('hiii', user)
    // GoogleProvider SinIn 
    const googleAuth = new GoogleAuthProvider();
    const handleGoogleProvider = () => {
       return signInWithPopup(auth, googleAuth)
          
    }


    // Create User Data Register Form
    const handleCreateProvider = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
          
    }
    const updateProfileData =  (updateData) =>{
        setLoading(true);
        updateProfile(auth.currentUser, updateData)
    }

    // LogOut User Data LogOut Button
    const handleLogOutProvider = ()=>{
        setLoading(true);
       return signOut(auth)
    }
    // LogIn user Data email and Password
    const handleLogInProvider = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const authInfo = {
        user,
        setUser,
        handleGoogleProvider,
        handleCreateProvider,
        handleLogOutProvider,
        handleLogInProvider ,
        updateProfileData ,
        loading,
        setLoading
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <Context.Provider value={authInfo}>
            {
                children
            }

        </Context.Provider>
    );
};

export default AuthProvider;