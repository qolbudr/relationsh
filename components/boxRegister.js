import StepRegister from './stepRegister'
import Link from 'next/link'
import {useState} from 'react'
import FormGroup from './forms/formGroup'
import Button from './forms/button'

const BoxRegister = () => {
	const [step, setStep] = useState(0)
	const [isLoading, setLoading] = useState(false)

	const sleep = ms => new Promise(
	  resolve => setTimeout(resolve, ms)
	);

	const stepIncrement = async () => {
		setLoading(true)
		setStep(step+1)
		await sleep(1000)
		setLoading(false)
	}

	return (
		<div className="w-10/12 md:w-80">
			<StepRegister step={step} isLoading={isLoading}/>
			{!isLoading ? (
				<>
					<FormGroup>
						<Button onClick={stepIncrement}>Next</Button>
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