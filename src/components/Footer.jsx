import React from 'react';
import '../styles/Footer.css';
import '../styles/Font.css';
import { Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='container-footer'>
      <div className="row">
        <Col className='container-total' xs={8}><h3>Total</h3></Col>
        <Col className='container-price' xs={4}><h3>R$ 00</h3></Col>
      </div>
    </div>
  );
}

export default Footer;
