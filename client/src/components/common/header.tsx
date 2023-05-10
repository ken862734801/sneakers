import { Link } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined, Menu, Close } from "@material-ui/icons";
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
    blurLevel: number;
    setBlurLevel : (blur: number) => void;
}

export default function Header ({page, onPageChange, setShowSideNav, blurLevel, setBlurLevel}: HeaderProps){
    const {cart} = useContext(CartContext);
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    
    function handleSideNavOpen(){
        setShowSideNav(true);
        setBlurLevel(2);
    }
    function handleScrollTop(){
        window.scrollTo(0,0);
    };
    function handleShowSearchBar(){
        setShowSearchBar(true)
    };
    function handleHideSearchBar(){
        setShowSearchBar(false)
    };

    return (
        <header style={{filter: `blur(${blurLevel}px)`}}>
            {showSearchBar ? (
                <div className="search-container">
                    <div className="brand-logo-container">
                        <Link to={"/"} onClick={handleScrollTop}>
                            <img src={Nike}></img>
                        </Link>
                    </div>
                    <div className="searchbar-container">
                        <div className="searchbar">
                            <div className="searchbar-search-icon-container">
                                <Search/>
                            </div>
                            <input className="search-input" type="text" placeholder="Search"></input>
                            <div className="searchbar-clear-button-container">
                                <Close/>
                            </div>
                        </div>
                    </div>
                    <div className="searchbar-cancel-text-container">
                        <p className="searchbar-cancel-text" onClick={handleHideSearchBar}>Cancel</p>
                    </div>
                </div>
            ):(
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
                        <Search onClick={handleShowSearchBar}/>
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
            )}
        </header>
    )
};