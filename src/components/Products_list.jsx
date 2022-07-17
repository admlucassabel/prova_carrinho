
import React from 'react';
import '../styles/Header.css';
import '../styles/Font.css';
import { Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

// console.log(this.props)
console.log("TESTE")

function Products() {
  const { state } = useLocation();
  console.log(state)

  return (
    <div className="container-list">{state.items.map((item, index) => {
        return (
            <img key={item.id} src={item.imageUrl} alt="image" />
        )
      })}
    </div>
  );
}

export default Products;
