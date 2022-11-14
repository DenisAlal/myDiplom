import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './home.scss';
import { useNavigate } from 'react-router-dom';
function Home() {
  const { currentUser } = useContext(AuthContext);
  var obj = JSON.stringify(currentUser);
  var objectJSON = JSON.parse(obj);
  const navigate = useNavigate();
  const home = () => {
    navigate('/home');
  };
  const login = () => {
    navigate('/login');
  };
  return (
    <>
      <header>
        <AppBar position='fixed' color='transparent'>
          <Toolbar variant='dense' className='ToolBar'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={home}
            >
              <RuleOutlinedIcon />
            </IconButton>
            <Typography flexGrow={1} />{' '}
            <IconButton
              edge='start'
              color='inherit'
              aria-label='login'
              onClick={login}
            >
              <LoginIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        {' '}
        <h1 className='tab'> Hello my little friend, {objectJSON.email}</h1>
      </main>
    </>
  );
}
export default Home;
