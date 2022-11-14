import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'rsuite';
import { AuthContext } from '../../context/AuthContext';

function Home() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const click = () => {
    console.log(currentUser);
  };
  return (
    <>
      <Button onClick={click}></Button>
    </>
  );
}
export default Home;
