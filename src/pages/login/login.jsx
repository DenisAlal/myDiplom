import './login.scss';
import { useState, useContext } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        navigate('/home');
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className='login'>
      <div className='div'>
        <form className='form' onSubmit={handleLogin}>
          <span className='titleLogin'>Авторизация</span>
          <TextField
            id='outlined-basic'
            label='Логин'
            variant='outlined'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='outlined-password-input'
            label='Пароль'
            variant='outlined'
            type='password'
            autoComplete='current-password'
            margin='dense'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit'>Логин</Button>
          {error && (
            <Alert className='Error_alert' severity='error'>
              Wrong email or password!
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
