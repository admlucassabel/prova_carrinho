

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectCart from './Initializer/SelectCart'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    (
        <Router>
                <Routes>
                    <Route exact path="/" element={<SelectCart />}/>
                    <Route path="/app" element={<App />}/>
                </Routes>
        </Router>
));

