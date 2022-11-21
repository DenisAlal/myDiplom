import React, { useState } from 'react';
import QrReader from '@deltachat/react-qr-reader';
import { Select, MenuItem, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import './qrScanner.scss';
function QRscanner() {
  const [qrscan, setQrscan] = useState('No result');
  const [rotate, setRotate] = React.useState('user');

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const cameraRotate = (e) => {
    if (rotate === 'user') {
      setRotate('environment');
    } else {
      setRotate('user');
    }
  };

  return (
    <Container>
      <div className='QRScan'>
        <br />
        <h5>QR Scanner</h5>
        <br />
        <button className='buttonRotate' onClick={cameraRotate}>
          Смена камеры
        </button>
        <br />
        <div className='QR'>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 300, width: 300 }}
            facingMode={rotate}
            className='QR'
          />
        </div>

        <h1 className='text'>{qrscan}</h1>
      </div>
    </Container>
  );
}

export default QRscanner;
