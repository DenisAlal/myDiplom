import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './appBar.scss';
import { Link } from 'react-router-dom';
function appBar() {
  return (
    <header>
      <AppBar position="fixed" color="transparent">
        <Toolbar variant="dense" className="ToolBar">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Link to={'/home'} />
            <RuleOutlinedIcon />
          </IconButton>
          <Typography flexGrow={1} />

          <Link to={'/login'} className="inher">
            {' '}
            <IconButton edge="start" color="inherit" aria-label="login">
              <LoginIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
}
export default appBar;
