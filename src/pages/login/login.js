import { FormControlLabel, Checkbox } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import './login.scss';
import { useForm } from 'react-hook-form';
import { grey } from '@mui/material/colors';
import { Button } from 'rsuite';

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main>
      <Container maxWidth="sm" class="background">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <div className="div">
          <form onSubmit={handleSubmit(onSubmit)} className="items_div">
            <h className="logtext">Авторизация</h>
            <input className="inputs" type="text" placeholder="Логин" {...register('login')} />
            <input class="inputs" placeholder="Пароль" type="password" {...register('password')} />
            <Button className="button" type="submit">
              Вход
            </Button>
          </form>
        </div>
      </Container>
    </main>
  );
}
export default Login;
