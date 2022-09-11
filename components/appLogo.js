import Image from 'next/image'

const AppLogo = () => {
	return (
		<div className="block text-center my-4">
			<Image src="/logo.png" width="375" height="55"/>
		</div>
	)	
}

export default AppLogo