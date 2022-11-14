import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import './appBarHome.scss';
import { useNavigate } from 'react-router-dom';

function AppBarHome() {
  const navigate = useNavigate();
  const tohome = () => {
    navigate('/home');
  };
  const login = () => {
    navigate('/login');
  };
  return (
    <header>
      <AppBar position='fixed' color='transparent'>
        <Toolbar variant='dense' className='ToolBar'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={tohome}
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
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}
export default AppBarHome;
