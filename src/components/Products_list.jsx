
import React from 'react';
import '../styles/Product_list.css';
import '../styles/Font.css';
import { Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

function Products() {
  const { state } = useLocation();
  console.log(state)

  return (
    <div className="container-list">{state.items.map((item, index) => {
      return (
        <div className='row product'>
          <Col md={2} xs={6} sm={4}><img key={item.length} src={item.imageUrl} alt="image" /></Col>
          <Col className='product-name' md={10} sm={8} xs={6}>
            <div className='row desc'>
              <Col className='product-name' xs={12}><h4>{item.name}</h4></Col>
              <Col className='product-name h6' xs={12}><h6>R$ {item.listPrice/100}</h6></Col>
              <Col className='product-name' xs={12}><h5>R$ {(item.listPrice+(item.priceTags[0].value))/100}</h5></Col>
            </div>
          </Col>
        </div>
      )
    })}
    </div>
  );
}

export default Products;
