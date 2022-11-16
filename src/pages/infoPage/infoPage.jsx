import AppBarLog from '../../components/appBar/appBar';
import './infoPage.scss';

function Start() {
  return (
    <>
      <AppBarLog goToHome={'/'} type={'info'} />
      <main>
        <div className='info_block'>
          <h4>
            Это иноформация о сайте, этот сайт ультра мега крутышка пушка гонка
          </h4>
        </div>
      </main>
    </>
  );
}
export default Start;
