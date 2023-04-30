import { Link } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined, Menu } from "@material-ui/icons";
import { Page } from "./types";
import "../../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nike from "../../images/nike.png";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context";

interface HeaderProps {
    loggedIn: boolean;
    page: Page;
    onPageChange: (newPage: Page) => void;
    setShowSideNav: (show: boolean) => void;
}

export default function Header ({page, onPageChange, setShowSideNav}: HeaderProps){
    const {cart} = useContext(CartContext);
    
    function handleSideNavOpen(){
        setShowSideNav(true)
    }

    function handleSideNavClose(){
        setShowSideNav(false);
    }
    // const [hideHeader, setHideHeader] = useState(false);
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
  
    //     setPrevScrollPos(currentScrollPos);
    //     setHideHeader(!visible);
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, [prevScrollPos]);
   
    function handleScrollTop(){
        window.scrollTo(0,0);
        handleSideNavClose();
    };

    return (
        <header>
            <div className="header-container">
                <div className="brand-logo-container">
                    <Link to={"/"} onClick={handleScrollTop}>
                        <img src={Nike}></img>
                    </Link>
                </div>
                <nav className="header-navbar">
                    <Link to={"/men"} onClick={() => onPageChange("men")}>Men</Link>
                    <Link to={"/women"} onClick={() => onPageChange("women")}>Women</Link>
                    <Link to={"/kids"} onClick={() => onPageChange("kids")}>Kids</Link>
                    <Link to={"/sale"} onClick={() => onPageChange("sale")}>Sale</Link>
                </nav>
                <div className="header-icon-container">
                    <div className="icon-container search-icon">
                        <Search/>
                    </div>
                    <div className={cart.length > 0 ? "icon-container shopping-cart-icon--active" : "icon-container shopping-cart-icon"}>
                        <Link to={"/cart"} onClick={handleScrollTop}><ShoppingCart/></Link>
                        <div className={cart.length > 0 ? "shopping-cart-notification--active" : "shopping-cart-notification"}></div>
                    </div>
                    <div className="icon-container user-icon">
                        <Link to={"/login"} onClick={handleScrollTop}><AccountCircleOutlined/></Link>
                    </div>
                    <div className="icon-container menu-bar">
                        <Menu onClick={handleSideNavOpen}/>
                    </div>
                </div>
            </div>
        </header>
    )
};