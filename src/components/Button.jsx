import React from 'react';
import '../styles/Button.css';
import '../styles/Font.css';
import Button from 'react-bootstrap/Button';


function ButtonBuy() {
    return (
        <div className="container-button">
            <div className='row'>
                <Button variant="primary">Finalizar Compra</Button>{' '}
            </div>
        </div>
    );
}

export default ButtonBuy;
