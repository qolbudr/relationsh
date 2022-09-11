import FormGroup from './forms/formGroup'
import Input from './forms/input'
import Label from './forms/label'
import Button from './forms/button'
import Link from 'next/link'
import AppLogo from './appLogo'
import { login } from '../utils/auth'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const BoxLogin = () => {
	const [form, setForm] = useState({})

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		
		setForm({
			...form,
			[name]: value
		})
	}

	const tryLogin = async () => {
		const user = await login(form.email, form.password)
		if(user.hasOwnProperty('error'))
		{
			setForm({email: '', password: ''})
			toast(user.error.message, {
			  icon: '😠',
			});
		}
	}



	return (
		<div className="w-10/12 md:w-80">
			<Toaster
			  position="top-center"
			  reverseOrder={false}
			/>
			<AppLogo/>
			<FormGroup>
				<Label>Email address</Label>
				<Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" label="email-input"/>
			</FormGroup>
			<FormGroup>
				<Label>Password</Label>
				<Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="********" label="password-input"/>
			</FormGroup>
			<FormGroup>
				<Button onClick={tryLogin}>Login</Button>
			</FormGroup>
			<FormGroup>
				<div className="block text-center mt-7 w-100">
					<h5 className="text-sm">Don't have an account ?
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