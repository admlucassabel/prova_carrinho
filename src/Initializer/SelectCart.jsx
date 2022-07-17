import React, { useEffect, useState } from 'react';
import '../styles/SelectCart.css';
import '../styles/Font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SelectCart = () => {
    const [cartLowPrice, setLowPrice] = useState([]);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        try {
            const response = await fetch('https://prova-carrinho-default-rtdb.firebaseio.com/carrinho2.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log('result is: ', JSON.stringify(result, null, 4));

            setLowPrice(result);
        } catch (err) {
            setErr(err.message);
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <Col xs={12}><h3 className='h3-select-cart'>Escolha o carrinho:</h3></Col>
                <Col xs={6}>
                    <Link to="/app">
                        <Button variant="primary" onClick={handleClick}>Carrinho Econômico</Button>{' '}
                    </Link>
                </Col>
                <Col xs={6}>
                    <Button variant="primary">Carrinho Luxo</Button>{' '}
                </Col>
            </div>
        </div>
    );
}

export default SelectCart;
