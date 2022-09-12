import Layout from '../../components/layout'
import SideMenuItem from '../../components/sideMenuItem'
import SideMenuDivider from '../../components/sideMenuDivider'
import { useAuth } from '../../utils/context'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { IoMdShare } from 'react-icons/io'
import Image from 'next/image'

const UserBoard = () => {
	const { user } = useAuth()

	return (
		<Layout title="RelationSh#@!& - User Board">
			<div className="relative w-full min-h-screen p-5">
				<div className="fixed h-screen flex items-center top-0 bottom-0 left-5">
					<div className="left-5 inline shadow p-4 rounded top-5 bg-white w-15">
						<ul className="list-unstyled text-3xl lg:text-4xl">
							<SideMenuItem>😇</SideMenuItem>
							<SideMenuItem>😠</SideMenuItem>
							<SideMenuItem>😍</SideMenuItem>
							<SideMenuItem>😶</SideMenuItem>
							<SideMenuDivider/>
							<SideMenuItem><IoMdShare/></SideMenuItem>
							<SideMenuDivider/>
							<SideMenuItem><RiLogoutCircleLine/></SideMenuItem>
						</ul>
					</div>
				</div>
				<div className="w-full text-center mb-3 fixed top-0 left-0 right-0 p-5">
					<h3 className="text-xl font-medium">{user.displayName}'s Board</h3>
				</div>
				<div className="grid grid-cols-4 gap-4 mt-14">
				  <div className="bg-yellow-100 row-span-2 rounded shadow p-5 min-h-full">
				  	<div className="flex items-center justify-between mb-5">
				  		<h4 className="text-md font-medium">Beaver Mode</h4>
				  		<Image width="32" height="32" className="rounded-full" src="https://ui-avatars.com/api/?background=random&name=Beaver Mode" />
				  	</div>
				  	<h6 className="text-sm font-normal text-slate-900">Beaver Mode sdfkdhsfs sdfhksdhf skdhfkshdf ksdhfkhsdf skdhfsdhf skdhfksdhf skdhfksdhf ksdjdh</h6>
				  </div>
				</div>
			</div>
    </Layout>
	)
}

export default UserBoard;