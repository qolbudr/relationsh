import Layout from './layout'
import MiddleCenterContainer from './middleCenterContainer'
import { ImSpinner8 } from 'react-icons/im'

const LoadingSpiner = () => {
	return (
		<Layout title="RelationSh#@!&">
			<MiddleCenterContainer>
				<div className="text-center block">
					<div className="inline-flex my-5 animate-spin">
						<ImSpinner8 size="30px"/>
					</div>
				</div>
			</MiddleCenterContainer>
    </Layout>
	)
}

export default LoadingSpiner