import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './appBar.scss';
import { useNavigate } from 'react-router-dom';
function AppBarNew() {
  const navigate = useNavigate();
  const infoPage = () => {
    navigate('/');
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
            onClick={infoPage}
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
  );
}
export default AppBarNew;
