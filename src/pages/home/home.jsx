import React, { useState } from 'react';
import './home.scss';
import AppBarLog from '../../components/appBar/appBar';
import { Button } from 'rsuite';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Home() {
  const [userN, setUserN] = useState('');
  const getInfo = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserN(user.displayName);
      } else {
      }
    });
  };
  return (
    <>
      <AppBarLog goToHome={'/home'} type={'home'} />
      <main>
        <Button onClick={getInfo}>Получить имя</Button>
        <h1>{userN}</h1>
      </main>
    </>
  );
}
export default Home;
  /*Нужно сделать вложенную навигацию для сайта внутри home. т.е. /home/scan 
  или home/settings и т.д написать простое редакьтирование профиляБ попробовать поработать над анимацуиями*/
