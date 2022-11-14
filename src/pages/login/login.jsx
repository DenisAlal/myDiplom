import './login.scss';
import { useState } from 'react';
import { TextField, Button, Paper, Alert } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const goHome = () => navigate('/home');
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        goHome();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  };
  return (
    <div className='login'>
      <Paper className='paper'>
        <form className='form' onSubmit={handleLogin}>
          <TextField
            id='outlined-basic'
            label='Логин'
            variant='outlined'
            type='email'
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id='outlined-password-input'
            label='Пароль'
            variant='outlined'
            type='password'
            autoComplete='current-password'
            margin='dense'
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type='submit'>Логин</Button>
          {error && <Alert severity='error'>Wrong email or password!</Alert>}
        </form>
      </Paper>
    </div>
  );
};
export default Login;
