import Layout from '../../components/layout'
import SideMenuItem from '../../components/sideMenuItem'
import SideMenuDivider from '../../components/sideMenuDivider'
import { useAuth } from '../../utils/context'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { IoMdShare } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { fetchBoard } from '../../utils/db'
import CardBoard from '../../components/cardBoard'
import { useRouter } from 'next/router'
import { protectedPage } from '../../utils/pageMiddleware'

const UserBoard = () => {
	const { user, logout } = useAuth()
	const [ board, setBoard ] = useState([]) 
	const [ filter, setFilter ] = useState([])
	const [ type, setType ] = useState(null)
	const route = useRouter()

	useEffect(() => {
			fetchBoard(user.uid, board, setBoard)
		}, 
	[])

	const tryLogout = () => {
		logout();
		route.replace('/login')
	}

	const handleClick = (e) => {
		const name = e.currentTarget.getAttribute('name')
		setType(name)
		const filteredBoard = board.filter((item) => item.type == name)
		setFilter(filteredBoard)

		if(name == type)
		{
			setType(null)
			setFilter(board)
		}
	}

	return (
		<Layout title="RelationSh#@!& - User Board">
			<div className="relative w-full min-h-screen p-5">
				<div className="fixed h-screen flex items-center top-0 bottom-0 left-5">
					<div className="left-5 inline shadow p-4 rounded top-5 bg-white w-15">
						<ul className="list-unstyled text-3xl lg:text-4xl">
							<SideMenuItem active={type == 'care-mood'} onClick={handleClick} name="care-mood">😇</SideMenuItem>
							<SideMenuItem active={type == 'angry-mood'} onClick={handleClick} name="angry-mood">😠</SideMenuItem>
							<SideMenuItem active={type == 'love-mood'} onClick={handleClick} name="love-mood">😍</SideMenuItem>
							<SideMenuItem active={type == 'no-mood'} onClick={handleClick} name="no-mood">😶</SideMenuItem>
							<SideMenuDivider/>
							<a href={'/board/' + user.uid} target="_blank" rel="noreferrer">
								<SideMenuItem><IoMdShare/></SideMenuItem>
							</a>
							<SideMenuDivider/>
							<SideMenuItem onClick={tryLogout}><RiLogoutCircleLine/></SideMenuItem>
						</ul>
					</div>
				</div>
				<div className="w-full text-center mb-3 fixed bg-slate-100 z-10 top-0 left-0 right-0 p-5">
					<h3 className="text-xl font-medium">{user.displayName}&apos;s Board</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
					{ (filter.length > 0 ? filter : board).map((item, index) =>
					  <CardBoard
					  	key={index} 
					  	index={index}
					  	type={item.type}
					  	name={item.name}
					  	content={item.content}
					  />
					)}
				</div>
			</div>
    </Layout>
	)
}

export default protectedPage(UserBoard);