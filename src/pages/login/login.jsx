import './login.scss'
import { useState } from 'react'
import { TextField, Button, Paper, Alert } from '@mui/material'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import app from '../../firebase'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [error, setError] = useState(false)
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const dispatch = useDispatch()
	const auth = getAuth(app)
	const navigate = useNavigate()
	const signUp = () => {
		signInWithEmailAndPassword(auth, email, pass)
			.then((userCredential) => {
				const user = userCredential.user
				dispatch(setUser({ email: user.email, id: user.uid, token: user.accessToken }))
				navigate('/home')
			})
			.catch((error) => {
				setError(error.code)
				setError(error.message)
			})
	}

	return (
		<div className="login">
			<Paper className="paper">
				<form className="form">
					<TextField
						id="outlined-basic"
						label="Логин"
						variant="outlined"
						type="email"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<TextField
						id="outlined-password-input"
						label="Пароль"
						variant="outlined"
						type="password"
						autoComplete="current-password"
						onChange={(event) => setPass(event.target.value)}
						margin="dense"
					/>
					<Button onClick={signUp}>Логин</Button>
					{error && <Alert severity="error">Wrong email or password!</Alert>}
				</form>
			</Paper>
		</div>
	)
}
export default Login
