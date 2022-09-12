const sideMenuItem = ({onClick, children}) => {
	return (
		<li onClick={onClick} className="my-3 transition ease-in-out scale-100 hover:scale-125 cursor-pointer">{children}</li>
	)
}

export default sideMenuItem;