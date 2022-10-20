import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext=createContext();


const auth=getAuth(app)
const UserContext = ({children}) => {
    const [user,setUser]=useState({})
    const [lodding,setLodding]=useState(true)

  

   const register=(email,password)=>{
    setLodding(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
  
   const logOut=()=>{
   return signOut(auth)
   }

   useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        setLodding(false)
    })
    return()=>{
        unSubscribe()
    }
   },[])

    const authInfo={user,register,login,logOut,lodding}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default UserContext;