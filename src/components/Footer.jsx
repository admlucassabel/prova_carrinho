import React from 'react';
import '../styles/footer.css';
import '../styles/font.css';
import { Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='container-footer'>
      <div className="row">
        <Col className='container-total' xs={8}>Total</Col>
        <Col className='container-price' xs={4}>R$ 11,00</Col>
      </div>
    </div>
  );
}

export default Footer;
