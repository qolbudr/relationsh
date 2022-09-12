const sideMenuItem = (props) => {
	if(props.active)
		return (
			<li {...props} className="my-3 transition ease-in-out scale-125 hover:scale-125 cursor-pointer">{props.children}</li>
		)
		
	return (
		<li {...props} className="my-3 transition ease-in-out scale-100 hover:scale-125 cursor-pointer">{props.children}</li>
	)
}

export default sideMenuItem;