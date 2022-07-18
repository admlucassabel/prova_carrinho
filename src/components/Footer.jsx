import React from 'react';
import '../styles/Footer.css';
import '../styles/Font.css';
import { Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

function Footer() {
  const { state } = useLocation();
  var frete = <></>
  if(state.value > 1000){
    frete = <h6>Parabéns, sua compra tem frete grátis!</h6>;
  }

  return (
    <div className='container-footer'>
      <div className="row">
        <Col className='container-total' xs={8}><h3>Total</h3></Col>
        <Col className='container-price' xs={4}><h3>R$ {state.value/100}</h3></Col>
        <Col className='container-frete' xs={12}>{frete}</Col>
      </div>
    </div>
  );
}

export default Footer;
