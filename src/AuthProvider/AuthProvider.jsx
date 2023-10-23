/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config"


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   // signupwithemailpass
   const signupwithemailpass = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }


   // signinwithemailpass
   const signinwithemailpass = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }


   // signinwithGoogle
   const signinwithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }


   // Set an authentication state observer and get user data
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         const unsubscribe = setUser(currentUser)
         setLoading(false)
         return () => {
            unsubscribe()
         }
      })
   }, [])


   // handleSignOut
   const handleSignOut = () => {
      return signOut(auth)
   }


   const authInfo = {
      signupwithemailpass,
      signinwithemailpass,
      user,
      signinwithGoogle,
      handleSignOut,
      loading
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;