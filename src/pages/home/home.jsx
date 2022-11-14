import React, { useContext } from 'react';
import  AppBarHome  from '../../components/appBarHome/appBarHome';
import { Button } from 'rsuite';
import { AuthContext } from '../../context/AuthContext';

function Home() {
  const { currentUser } = useContext(AuthContext);
  var obj = JSON.stringify(currentUser);
  var objectJSON = JSON.parse(obj);
  return (
    <>
      <AppBarHome />
      <h1>{objectJSON.email}</h1>
    </>
  );
}
export default Home;
