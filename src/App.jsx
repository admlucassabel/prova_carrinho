
import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Footer.jsx'

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
