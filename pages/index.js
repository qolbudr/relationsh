import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
	const router = useRouter()

	useEffect(() => {
		router.replace('/login')
	}, [])


	return <></>
	
}

export default Home;