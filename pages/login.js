import Layout from '../components/layout'
import MiddleCenterContainer from '../components/middleCenterContainer'
import BoxLogin from '../components/boxLogin'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { forceSignedIn } from '../utils/pageMiddleware'

const Login = () => {
	const router = useRouter();
	
	return (
		<Layout title="RelationSh#@!& - Login">
			<MiddleCenterContainer>
				<BoxLogin/>
			</MiddleCenterContainer>
    </Layout>
	)
}

export default forceSignedIn(Login);