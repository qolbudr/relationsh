import Image from 'next/image'

const CardBoard = ({name, content, type, index}) => {
	if(type == 'angry-mood')
		return (
			<div className={ (index == 0 || index % 6 == 0 ? 'row-span-2 ' : '') + "bg-neutral-300 rounded shadow p-5 min-h-full" }>
		  	<div className="flex items-center justify-between mb-5">
		  		<h4 className="text-md font-medium">{name}</h4>
		  		<Image width="32" height="32" className="rounded-full" src={'https://ui-avatars.com/api/?background=random&name=' + name } />
		  	</div>
		  	<h6 className="text-sm font-normal text-slate-900">{content}</h6>
		  </div>
		)

	if(type == 'care-mood')
		return (
			<div className={ (index == 0 || index % 6 == 0 ? 'row-span-2 ' : '') + "bg-blue-200 rounded shadow p-5 min-h-full" } >
		  	<div className="flex items-center justify-between mb-5">
		  		<h4 className="text-md font-medium">{name}</h4>
		  		<Image width="32" height="32" className="rounded-full" src={'https://ui-avatars.com/api/?background=random&name=' + name } />
		  	</div>
		  	<h6 className="text-sm font-normal text-slate-900">{content}</h6>
		  </div>
		)

	if(type == 'love-mood')
		return (
			<div className={ (index == 0 || index % 6 == 0 ? 'row-span-2 ' : '') + "bg-pink-300 rounded shadow p-5 min-h-full" } >
		  	<div className="flex items-center justify-between mb-5">
		  		<h4 className="text-md font-medium">{name}</h4>
		  		<Image width="32" height="32" className="rounded-full" src={'https://ui-avatars.com/api/?background=random&name=' + name } />
		  	</div>
		  	<h6 className="text-sm font-normal text-slate-900">{content}</h6>
		  </div>
		)

	if(type == 'no-mood')
		return (
			<div className={ (index == 0 || index % 6 == 0 ? 'row-span-2 ' : '') + "bg-yellow-100 rounded shadow p-5 min-h-full" } >
		  	<div className="flex items-center justify-between mb-5">
		  		<h4 className="text-md font-medium">{name}</h4>
		  		<Image width="32" height="32" className="rounded-full" src={'https://ui-avatars.com/api/?background=random&name=' + name } />
		  	</div>
		  	<h6 className="text-sm font-normal text-slate-900">{content}</h6>
		  </div>
		)
}

export default CardBoard