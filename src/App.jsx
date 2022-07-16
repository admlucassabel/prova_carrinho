
import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Products_list'
import Button from './components/Button.jsx'

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
      <Button></Button>
    </div>
  );
}

export default App;
