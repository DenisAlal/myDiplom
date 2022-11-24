import AppBarLog from '../../components/appBar/appBar';
import Image from 'mui-image';
import './infoPage.scss';
import BG from './BG.png';
import { Grid, Paper } from '@mui/material';
function Start() {
  return (
    <>
      <AppBarLog goToHome={'/'} type={'info'} />
      <main>
        <div className='container'>
          <div className='centerBG'>
            <Image
              className='image'
              src={BG}
              bgColor='inherit'
              shiftDuration={500}
              fit='scale-down'
              height='90%'
              width='80%'
            />
          </div>

          <div className='divText'>
            Это иноформация о сайте, этот сайт ультра мега крутышка пушка гонка
          </div>
        </div>
      </main>
    </>
  );
}
export default Start;
