"use client";
import { auth, googleProvider } from "@/firebase/config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User:", currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const UserAuth = () => {
    return useContext(AuthContext);
};
