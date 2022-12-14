import FormGroup from './forms/formGroup'
import Input from './forms/input'
import Label from './forms/label'
import Button from './forms/button'
import Link from 'next/link'
import AppLogo from './appLogo'
import { useAuth } from '../utils/context'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'
import { sleep } from '../utils/sleep'

const BoxLogin = () => {
	const router = useRouter()
	const [form, setForm] = useState({})
	const { login } = useAuth()
 
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		
		setForm({
			...form,
			[name]: value
		})
	}

	const tryLogin = async (e) => {
		e.preventDefault()
		const user = await login(form.email, form.password)
		if(user.hasOwnProperty('error'))
		{
			setForm({email: '', password: ''})
			return toast(user.error.message, {
			  icon: '😠',
			});
		}

		return router.replace('/user/board')
	}

	return (
		<div className="w-10/12 md:w-80">
			<Toaster
			  position="top-center"
			  reverseOrder={false}
			/>
			<AppLogo/>
			<form onSubmit={tryLogin}>
				<FormGroup>
					<Label>Email address</Label>
					<Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" label="email-input" required/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="********" label="password-input" required/>
				</FormGroup>
				<FormGroup>
					<Button type="submit">Login</Button>
				</FormGroup>
			</form>
			<FormGroup>
				<div className="block text-center mt-7 w-100">
					<h5 className="text-sm">Don&apos;t have an account ?
						<Link href="register">
							<a className="text-slate-500 hover:underline ml-1">Register</a>
						</Link>
					</h5>
				</div>
			</FormGroup>
		</div>
	)
}

export default BoxLogin;