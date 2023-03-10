import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home/home';
import Men from './components/men/men';
import Women from './components/women/women';
import Kids from './components/kids/kids';
import Sale from './components/sale/sale';
import Cart from './components/cart/cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
          <main>
            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path = "/men" element = {<Men/>}/>
                <Route path = "/women" element = {<Women/>}/>
                <Route path = "/kids" element={<Kids/>}/>
                <Route path = "/sale" element={<Sale/>}/>
                <Route path= "/cart" element = {<Cart/>}/>
            </Routes>
          </main>
      <Footer/>
    </div>
  );
}

export default App;
