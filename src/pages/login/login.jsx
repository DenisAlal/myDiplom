import './login.scss';
import { useState, useContext } from 'react';
import { TextField, Alert, Stack } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { Modal, Button } from 'rsuite';

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
        navigate('/home', { state: { password, email } });
      })
      .catch((error) => {
        setError(true);
      });
  };
  const handleClose = () => {
    navigate('/');
  };
  return (
    <>
      <div className='login'>
        <Modal open={true} size={'sm'} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Авторизация</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Stack spacing={3} sx={{ mt: 1, mr: 5, ml: 5 }}>
              <TextField
                sx={{ mt: 1 }}
                id='outlined-basic'
                label='Логин'
                variant='outlined'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ mt: 1 }}
                id='outlined-basic'
                label='Пароль'
                variant='outlined'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className='Button'
                onClick={handleLogin}
                appearance='primary'
                color='violet'
              >
                Вход
              </Button>
              {error && (
                <Alert severity='error'>Wrong email or password!</Alert>
              )}
            </Stack>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default Login;
