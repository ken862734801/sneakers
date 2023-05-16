import React, {useState, useEffect, useContext} from 'react';
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/common/header';
import SideNav from './components/common/sidenav';
import Footer from './components/common/footer';
import Account from './components/account/account';
import Login from './components/login/login';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import ProductGrid from './components/product/product-grid';
import ProductPage from './components/product/product-page';
import ErrorPage from './components/error/error-page';
import { CartContext } from './context/CartContext';
import { UserContext, UserProvider } from "./context/UserContext";
import './App.css';

import { Page } from './components/common/types';
import SearchResults from './components/search/search-results';

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
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur minus deleniti!",
    path: "women"
  },
  kids: {
    name: "Kid's Sneakers",
    description:"Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur minus animi deleniti. Lorem ipsum dolor sit amet consectetur!",
    path: "kids"
  },
  sale: {
    name:"Sneakers on Sale",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur recusandae non rem eos exercitationem soluta optio aspernatur!",
    path: "sale"
  },
}

function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {userInformation, setUserInformation} = useContext(UserContext);


  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const [blurLevel, setBlurLevel] = useState<number>(0);
  const [page, setPage] = useState<Page>("men");
  const [pageName, setPageName] = useState(pageInformation[page].name);
  const [pageDescription, setPageDescription] = useState(pageInformation[page].description);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
  
      if (decodedToken.exp < currentTime) {
        // Token has expired
        setIsLoggedIn(false);
        setUserInformation(undefined); // Clear user information
      } else {
        setIsLoggedIn(true);
        const storedUserInformation = localStorage.getItem("userInformation");
        if (storedUserInformation) {
          setUserInformation(JSON.parse(storedUserInformation));
        }
      }
    }
  }, []);


  function handlePageChange (newPage: Page){
    setPage(newPage);
    setPageName(pageInformation[newPage].name);
    setPageDescription(pageInformation[newPage].description);
    setShowSideNav(false);
    window.scrollTo(0, 0);
  }

  return (
    <UserProvider>
       <CartContext.Provider value={{cart, setCart}}>
      <div className="App">
      <Header blurLevel={blurLevel} setBlurLevel={setBlurLevel} setShowSideNav={setShowSideNav} loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} page={page} onPageChange={handlePageChange}/>
      {showSideNav && (<SideNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setBlurLevel={setBlurLevel} showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>)}
          <main style={{ filter: `blur(${blurLevel}px)`}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element = {isLoggedIn? <Navigate to="/account"/> : <Login setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/account" element={isLoggedIn ? <Account userInformation={userInformation } setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/login" />}/>
                <Route path = "/men" element = {
                <ProductGrid 
                  userInformation={userInformation}
                  name={pageInformation.men.name} 
                  description={pageInformation.men.description}
                  path={pageInformation.men.path}/>}
                />
                <Route path = "/women" element = {
                <ProductGrid
                  name={pageInformation.women.name}
                  description={pageInformation.women.description}
                  path={pageInformation.women.path}/>}
                />
                <Route path = "/kids" element={
                <ProductGrid
                  name={pageInformation.kids.name}
                  description={pageInformation.kids.description}
                  path={pageInformation.kids.path}/>}
                />
                <Route path = "/sale" element={
                <ProductGrid
                  name={pageInformation.sale.name}
                  description={pageInformation.sale.description}
                  path={pageInformation.sale.path}/>}
                />
                <Route path= "/cart" element = {<Cart/>}/>
                <Route path="/us/:name/:id" element={<ProductPage loggedIn={isLoggedIn} userInformation={userInformation}/>}></Route>
                <Route path="/search" element={<SearchResults/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
          </main>
      <Footer blurLevel={blurLevel}/>
    </div>
     </CartContext.Provider>
    </UserProvider>
  );
}

export default App;
