import Layout from '../../components/layout'
import { useAuth } from '../../utils/context'

const UserBoard = () => {
	const { user } = useAuth()

	return (
		<Layout title="RelationSh#@!& - User Board">
			<div className="relative w-full h-screen">
				<div className="absolute left-10 shadow p-4 rounded bottom-36 top-36 bg-white w-15">
					
				</div>
			</div>
    </Layout>
	)
}

export default UserBoard;