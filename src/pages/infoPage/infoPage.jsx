import AppBarLog from '../../components/appBar/appBar';
import './infoPage.scss';
import { Outlet } from 'react-router-dom';

function Start() {
  return (
    <>
      <AppBarLog />
      <div className='info_block'>
        <h1>
          Это иноформация о сайте, этот сайт ультра мега крутышка пушка гонка
        </h1>
      </div>
      <Outlet />
    </>
  );
}
export default Start;
