import StepRegister from './stepRegister'
import Link from 'next/link'
import { useState } from 'react'
import FormGroup from './forms/formGroup'
import Button from './forms/button'
import AppLogo from './appLogo'
import { sleep } from '../utils/sleep'
import { register } from '../utils/auth'
import toast, { Toaster } from 'react-hot-toast';

const BoxRegister = () => {
	const [step, setStep] = useState(0)
	const [isLoading, setLoading] = useState(false)
	const [form, setForm] = useState({})

	const stepIncrement = async () => {
		setLoading(true)
		setStep(step+1)
		await sleep(1000)
		setLoading(false)
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		
		setForm({
			...form,
			[name]: value
		})
	}

	const tryRegister = async () => {
		if(form.password != form.password_confirmation)
		{
			return toast('Password and confirmation is different', {
			  icon: '😠',
			});
		}

		const user = await register(form.name, form.email, form.password)
		
		if(user.hasOwnProperty('error'))
		{
			setStep(0)
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
			<StepRegister onChange={handleChange} step={step} isLoading={isLoading}/>
			{!isLoading ? (
				<>
					<FormGroup>
						<Button onClick={step == 2 ? tryRegister : stepIncrement}>{step == 2 ? 'Register' : 'Next'}</Button>
					</FormGroup>
					<FormGroup>
						<div class="block text-center mt-7 w-100">
							<h5 class="text-sm">Already have an account ?
								<Link href="login">
									<a className="text-slate-500 hover:underline ml-1">Login</a>
								</Link>
							</h5>
						</div>
					</FormGroup>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default BoxRegister;