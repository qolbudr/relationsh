import { useAuth } from './context'
import { useRouter } from 'next/router'
import LoadingSpiner from '../components/loadingSpiner'

export const protectedPage = (Component) => () => {
	const { user, setUser } = useAuth()
	const router = useRouter()

	if(!user) {
		router.replace('/login')
		return <></>
	}
		
	return <Component/>;
}

export const forceSignedIn = (Component) => () => {
	const { user } = useAuth()
	const router = useRouter()

	if(user) {
		router.replace('user/board')
		return <></>
	}

	return <Component/>;
}