import Head from 'next/head'

const Layout = ({children, title, description}) => {
	return (
		<>
			<Head>
        <title>{title}</title>
        <meta name="description" content="An app to connect you with your customer and build tight relationship with them." />
        <link rel="icon" href="/icon.png" />
      </Head>
			<main className="bg-slate-100">
				{children}
			</main>
		</>
	)
}

export default Layout