import { createContext, useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'
import LoadingSpiner from '../components/loadingSpiner'

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = (props) => {
	const [user, setUser] = useState(null)

	const login = async (email, password) => {
		try {
			const credential = await signInWithEmailAndPassword(auth, email, password)
			setUser(credential.user)
			return credential.user
		} catch (e) {
			const error = {
				error: {
					message: e.code
				}
			}
	    setUser(error)
	    return error
		}
	}

	const register =  async (name, email, password) => {
		try {
			const credential = await createUserWithEmailAndPassword(auth, email, password);
			updateProfile(auth.currentUser, {
			  displayName: name, photoURL: "https://ui-avatars.com/api/?background=random&name=" + name
			})
			setUser(credential.user)
			return credential.user
		} catch (e) {
			const error = {
				error: {
					message: e.code
				}
			}
	    setUser(error)
	    return error
		}
	}

	const value = {
		login,
		register,
		user,
		setUser
	}

	return (
		<AuthContext.Provider value={value} {...props}></AuthContext.Provider>
	)
}

export const AuthState = ({children}) => {
	const { user, setUser } = useAuth()
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
		  if (user) {
		    setUser(user)
		  }

		  setLoading(false)
		});
	}, [])

	if(isLoading)
		return (
			<>
				<LoadingSpiner/>
			</>
		)

	return children;
}