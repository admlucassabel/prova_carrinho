import React from 'react';
import '../styles/Footer.css';
import '../styles/Font.css';
import { Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='container-footer'>
      <div className="row">
        <Col className='container-total' xs={8}>Total</Col>
        <Col className='container-price' xs={4}>R$ 00</Col>
      </div>
    </div>
  );
}

export default Footer;
