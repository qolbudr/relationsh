const Button = ({children, label}) => {
	return (
		<button className="
			transition
			ease-in-out
			hover:shadow-md 
			bg-stone-900 
			text-sm 
			font-medium 
			hover:bg-stone-700 
			h-10 px-3 
			rounded-md 
			text-white 
			shadow-sm 
			block 
			w-full
			hover:transition-all
			">
				{children}
			</button>
	)
}

export default Button;