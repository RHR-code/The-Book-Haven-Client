import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  // sign up
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  // sign in with google

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user profile
  const userProfile = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    userSignUp,
    userSignIn,
    userSignOut,
    userProfile,
    googleSignIn,
    user,
    setUser,
  };

  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
