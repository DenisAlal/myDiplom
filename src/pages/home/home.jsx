import React, { useContext } from 'react';

import { Button } from 'rsuite';
import { AuthContext } from '../../context/AuthContext';

function Home() {
  const { currentUser } = useContext(AuthContext);

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
