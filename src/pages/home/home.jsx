import React, { useContext } from 'react';
import { Button } from 'rsuite';
import { AuthContext } from '../../context/AuthContext';
import AppBarHome from '../../components/appBarHome/appBarHome';
function Home() {
  const { currentUser } = useContext(AuthContext);
  var obj = JSON.stringify(currentUser);
  var objectJSON = JSON.parse(obj);
  return (
    <>
      <AppBarHome />
      <br />
      <h1>{objectJSON.email}</h1>
    </>
  );
}
export default Home;
