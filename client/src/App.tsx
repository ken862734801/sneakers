import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import ProductPage from './components/product/product-page';

import './App.css';

import { Page } from './components/common/types';

interface PageInformation {
  name: string;
  description: string;
  path: string;
};

const pageInformation: Record<Page, PageInformation> = {
  men: {
    name: "Men's Sneakers",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit provident eveniet laborum reiciendis. Perferendis magnam architecto voluptatibus nihil maiores!",
    path: "men"
  },
  women: {
    name:"Women's Sneakers",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur minus animi deleniti.",
    path: "women"
  },
  kids: {
    name: "Kid's Sneakers",
    description:"Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur minus animi deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    path: "kids"
  },
  sale: {
    name:"Sneakers on Sale",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur minus animi deleniti.",
    path: "sale"
  },
}

function App() {
  const [page, setPage] = useState<Page>("men");
  const [pageName, setPageName] = useState(pageInformation[page].name);
  const [pageDescription, setPageDescription] = useState(pageInformation[page].description);

  function handlePageChange (newPage: Page){
    setPage(newPage);
    setPageName(pageInformation[newPage].name);
    setPageDescription(pageInformation[newPage].description);
  }

  return (
    <div className="App">
      <Header page={page} onPageChange={handlePageChange}/>
          <main>
            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path = "/men" element = {
                <ProductPage 
                  name={pageInformation.men.name} 
                  description={pageInformation.men.description}
                  path={pageInformation.men.path}/>}
                />
                <Route path = "/women" element = {
                <ProductPage
                  name={pageInformation.women.name}
                  description={pageInformation.women.description}
                  path={pageInformation.women.path}/>}
                />
                <Route path = "/kids" element={
                <ProductPage
                  name={pageInformation.kids.name}
                  description={pageInformation.women.description}
                  path={pageInformation.kids.path}/>}
                />
                <Route path = "/sale" element={
                <ProductPage
                  name={pageInformation.sale.name}
                  description={pageInformation.sale.description}
                  path={pageInformation.sale.path}/>}
                />
                <Route path= "/cart" element = {<Cart/>}/>
            </Routes>
          </main>
      <Footer/>
    </div>
  );
}

export default App;
