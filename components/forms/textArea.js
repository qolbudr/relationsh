const TextArea = (props) => {
	return (
		<textarea
			{...props}
			className="
			placeholder:transition 
			placeholder:ease-in-out 
			placeholder:delay-50
			bg-white 
			block 
			w-full 
			text-slate-900 
			shadow-sm 
			rounded-md 
			px-3
			py-2
			sm:text-sm
			focus:outline-none
			focus:ring-2
			focus:ring-sky-500
			ring-1
			ring-slate-200
			focus:placeholder:translate-x-1
		"></textarea>
	)
}

export default TextArea;