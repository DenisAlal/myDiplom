import React, { useEffect } from 'react';
import './home.scss';
import AppBarLog from '../../components/appBar/appBar';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Grid } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [name, setName] = React.useState();

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
      }
    });
  });
  const goScan = () => {
    navigate('/qrscanner');
  };
  return (
    <>
      <AppBarLog goToHome={'/home'} type={'home'} />
      <main>
        <Grid container className='gridParam'>
          <Grid item xs={12}>
            <h4>Добро пожаловать в приложение, {name}</h4>

            <Grid item xs={12} sx={{ mt: 5 }}>
              <h4>Для сканирования студентов нажмите на кнопку</h4>
            </Grid>

            <Grid item xs={12} sx={{ mt: 5 }}>
              {' '}
              <button className='btn btn-white btn-animate' onClick={goScan}>
                {' '}
                <QrCode2Icon
                  sx={{
                    fontSize: 200,
                  }}
                />
              </button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <h4>Для сканирования студентов нажмите на кнопку</h4>
            </Grid>

            <Grid item xs={12} sx={{ mt: 5 }}>
              {' '}
              <button className='btn btn-white btn-animate' onClick={goScan}>
                {' '}
                <QrCode2Icon
                  sx={{
                    fontSize: 200,
                  }}
                />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default Home;
/*Нужно сделать вложенную навигацию для сайта внутри home. т.е. /home/scan 
  или home/settings попробовать поработать над анимациями*/
