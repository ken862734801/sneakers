import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home/home';
import Cart from './components/cart/cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <main>
            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path= "/cart" element = {<Cart/>}/>
            </Routes>
          </main>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
