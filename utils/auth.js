import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './firebase'
import { db } from "./firebase"
import { setDoc, getDoc, addDoc, collection, getDocs, deleteDoc, query, where, doc, updateDoc } from "firebase/firestore"

export const login = async (email, password) => {
	try {
		const credential = await signInWithEmailAndPassword(auth, email, password)
		return credential.user;
	} catch (e) {
		const error = {
			error: {
				message: e.code
			}
		}
    return error;
	}
}

export const register =  async (name, email, password) => {
	try {
		const credential = await createUserWithEmailAndPassword(auth, email, password);
		updateProfile(auth.currentUser, {
		  displayName: name, photoURL: "https://ui-avatars.com/api/?background=random&name=" + name
		})

		return credential.user;
	} catch (e) {
		const error = {
			error: {
				message: e.code
			}
		}
    return error;
	}
}