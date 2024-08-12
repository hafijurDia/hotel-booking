import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const name = "Hafijur Rahma";

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      }

    //logout 
    const logout = () => {
        return signOut(auth);
    }

    //observer user auth state
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        //stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logout,
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};



export default AuthProvider;
