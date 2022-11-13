import { Button } from '@mui/material'
import { useAuth } from '../../hooks/use-auth'
import { Navigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { setUser } from 'store/slices/userSlice'
function Home() {
	const { isAuth, email } = useAuth()
	const auth = getAuth()
	const out = () => {
		signOut(auth)
			.then(() => {
				setUser({ email: null, id: null, token: null })
				console.log(email)
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
	}
	return isAuth ? (
		<div>
			{' '}
			<h1> hello, {email}</h1> <Button onClick={out}>SignOut</Button>
		</div>
	) : (
		<Navigate to="/login" />
	)
}
export default Home
