import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import HomeIcon from '@rsuite/icons/legacy/Home';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from 'rsuite';
import {
  Stack,
  Item,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function Home() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  // functions
  const home = () => {
    navigate('/home');
  };

  const logOut = (e) => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const goSettings = () => {};
  // setings menu

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header>
        <AppBar position='static' color='transparent'>
          <Toolbar variant='dense' className='ToolBar'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={home}
            >
              <HomeIcon />
            </IconButton>
            <Typography flexGrow={1} />{' '}
            <IconButton
              edge='start'
              color='inherit'
              aria-label='login'
              onClick={() => setOpen(!open)}
            >
              <TuneIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        {open && (
          <div className='settings'>
            <div className='closeSettings'>
              <IconButton onClick={() => setOpen(!open)}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className='buttonsSettings'>
              <span className='titleSet'>Настройки</span>
              <Button
                appearance='ghost'
                className='buttonSet'
                onClick={goSettings}
              >
                Настройки пользователя
              </Button>
              <Button appearance='ghost' className='buttonSet' onClick={logOut}>
                Выход
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
export default Home;
/*Нужно сделать вложенную навигацию для сайта внутри home. т.е. /home/scan 
или home/settings и т.д*/
