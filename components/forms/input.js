const Input = ({placeholder, label, value, type, onChange, name}) => {
	return (
		<input
			name={name}
			onChange={onChange}
			type={type}
			value={value}
			aria-label={label}
			aria-required="true"
			placeholder={placeholder}
			className="
			placeholder:transition 
			placeholder:ease-in-out 
			placeholder:delay-50
			bg-white 
			h-10
			block 
			w-full 
			text-slate-900 
			shadow-sm 
			rounded-md 
			px-3
			sm:text-sm
			focus:outline-none
			focus:ring-2
			focus:ring-sky-500
			ring-1
			ring-slate-200
			focus:placeholder:translate-x-1
		"/>
	)
}

export default Input;