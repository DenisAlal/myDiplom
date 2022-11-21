import React, { useContext } from 'react';
import HomeIcon from '@rsuite/icons/legacy/Home';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  MenuItem,
  Menu,
  Tooltip,
  Divider,
  Stack,
  TextField,
  Avatar,
  Alert,
} from '@mui/material';
import './appBar.scss';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Loader } from 'rsuite';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import {
  EmailAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  updatePassword,
  reauthenticateWithCredential,
} from 'firebase/auth';

function AppBarNew(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // navigate
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`${props.goToHome}`);
  };
  const goTO = (goToProp) => {
    navigate(`${goToProp}`);
  };
  const openModal = () => {
    setAnchorEl(null);
    handleOpenMenu();
  };
  //menu  const
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);
  const { dispatch } = useContext(AuthContext);
  const [displayNameUser, setDisplayName] = React.useState(null);
  const [userN, setUserN] = React.useState('');
  const [userPassword, setPassword] = React.useState(null);
  const [userPasswordCheck, setPasswordCheck] = React.useState(null);
  const [passwordErr, setPasswordErr] = React.useState(null);

  const handleEntered = () => {
    setTimeout(() => setTime(5), 500);
    getInfo();
  };

  const getInfo = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserN(user.displayName);
      }
    });
  };
  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateName = () => {
    if (displayNameUser !== null && displayNameUser !== '') {
      updateProfile(auth.currentUser, {
        displayName: displayNameUser,
      })
        .then(() => {
          setOpen(false);
          window.location.reload();
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    } else {
      setPasswordErr('nameErr');
    }
  };
  const updatePass = () => {
    if (
      userPassword !== '' &&
      userPasswordCheck !== '' &&
      userPasswordCheck !== null &&
      userPassword !== null
    ) {
      if (userPassword === userPasswordCheck) {
        const user = auth.currentUser;
        const newPassword = userPassword;
        updatePassword(user, newPassword)
          .then(() => {
            dispatch({ type: 'LOGOUT' });
            setOpen(false);
            window.location.reload();
          })
          .catch((error) => {
            setPasswordErr('reauth');
          });
      } else {
        setPasswordErr('passv');
      }
    } else {
      setPasswordErr('fail');
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Tooltip title='Go to home'>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={goHome}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              myApp
            </Typography>
            {props.type === 'home' && (
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <Avatar alt='Account' />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={openModal}>
                    Настройки пользователя
                  </MenuItem>
                  <Divider variant='middle' />
                  <MenuItem onClick={signOutButton}>Выход</MenuItem>
                </Menu>
              </div>
            )}
            {props.type === 'info' && (
              <div>
                <Tooltip title='Go to login'>
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={() => goTO('login')}
                    color='inherit'
                  >
                    <LoginIcon />
                  </IconButton>
                </Tooltip>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {props.type === 'home' && (
        <>
          <Modal
            open={open}
            onClose={handleCloseMenu}
            onEntered={handleEntered}
            onExited={() => {
              setTime(0);
            }}
            size={'xs'}
          >
            <Modal.Header>
              <Modal.Title>Настройки пользователя</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {time ? (
                <Stack spacing={3} sx={{ mt: 1 }}>
                  Ваше имя: {userN}
                  <TextField
                    sx={{ mt: 1 }}
                    label='Введите новое имя'
                    variant='outlined'
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                  <Divider />
                  Изменение пароля
                  <TextField
                    label='Введите новый пароль'
                    variant='outlined'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    label='Подтвердите новый пароль'
                    variant='outlined'
                    type='password'
                    onChange={(e) => setPasswordCheck(e.target.value)}
                  />{' '}
                </Stack>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <Loader size='md' speed='fast' />
                </div>
              )}
              {passwordErr === 'reauth' && (
                <Alert severity='error'>
                  Для смены пароля нужно заново авторизироваться
                </Alert>
              )}
              {passwordErr === 'passv' && (
                <Alert severity='error'>Пароли различаются</Alert>
              )}
              {passwordErr === 'fail' && (
                <Alert severity='error'>Введенный пароль не подтвержден</Alert>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={updateName} appearance='primary'>
                Изменить имя
              </Button>
              <Button onClick={updatePass} appearance='primary'>
                Изменить парроль
              </Button>
              <Button onClick={handleCloseMenu} appearance='subtle'>
                Отмена
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}
export default AppBarNew;
