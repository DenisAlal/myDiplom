import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import BarHome from '../../components/appBarHome/appBarHome';

function Home() {
  const { currentUser } = useContext(AuthContext);
  var obj = JSON.stringify(currentUser);
  var objectJSON = JSON.parse(obj);
  return (
    <>
      <BarHome />
      <br />
      <h1>{objectJSON.email}</h1>
    </>
  );
}
export default Home;
