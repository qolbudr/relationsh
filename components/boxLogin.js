import FormGroup from './forms/formGroup'
import Input from './forms/input'
import Label from './forms/label'
import Button from './forms/button'
import Link from 'next/link'

const BoxLogin = () => {
	return (
		<div className="w-10/12 md:w-80">
			<FormGroup>
				<Label>Email address</Label>
				<Input type="email" placeholder="name@example.com" label="email-input"/>
			</FormGroup>
			<FormGroup>
				<Label>Password</Label>
				<Input type="password" placeholder="********" label="password-input"/>
			</FormGroup>
			<FormGroup>
				<Button>Login</Button>
			</FormGroup>
			<FormGroup>
				<div class="block text-center mt-7 w-100">
					<h5 class="text-sm">Don't have an account ?
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