import FormGroup from './forms/formGroup'
import Input from './forms/input'
import Label from './forms/label'
import Button from './forms/button'
import {ImSpinner8} from 'react-icons/im'

const StepRegister = ({step, isLoading}) => {
	if(isLoading == true)
		return (
			<FormGroup>
				<div className="text-center block">
					<div className="inline-flex my-5 animate-spin">
						<ImSpinner8 size="30px"/>
					</div>
				</div>
			</FormGroup>
		)

	if (step == 0)
		return (
			<FormGroup>
				<Label>Full name</Label>
				<Input type="text" placeholder="Your name" label="name-input"/>
			</FormGroup>
		)

	if (step == 1)
		return (
			<FormGroup>
				<Label>Email address</Label>
				<Input type="email" placeholder="name@example.com" label="email-input"/>
			</FormGroup>
		)

	if (step == 2)
		return (
			<>
				<FormGroup>
					<Label>Password</Label>
					<Input type="password" placeholder="********" label="password-input"/>
				</FormGroup>
				<FormGroup>
					<Label>Password Confirmation</Label>
					<Input type="password" placeholder="********" label="password-input"/>
				</FormGroup>
			</>
		)
}

export default StepRegister;