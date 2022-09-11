import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'
import { useState, createContext } from "react";

export const login = async (email, password) => {
	try {
		const credential = await signInWithEmailAndPassword(auth, email, password)
		return credential.user;
	} catch (e) {
    return e;
	}
}

export const register =  async (name, email, password) => {
	try {
		const credential = await createUserWithEmailAndPassword(auth, email, password);
		return credential.user;
	} catch (e) {
		return e;
	}
}