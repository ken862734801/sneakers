import { Link } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined, Menu } from "@material-ui/icons";
import { Page } from "./types";
import "../../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nike from "../../images/nike.png";
import { useState, useEffect } from "react";

interface HeaderProps {
    loggedIn: boolean;
    page: Page;
    onPageChange: (newPage: Page) => void;
}

export default function Header ({page, onPageChange}: HeaderProps){
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
   
    return (
        <header>
            <div className="header-container">
                <div className="brand-logo-container">
                    <Link to={"/"}>
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
                    <div className="icon-container">
                        <Search/>
                    </div>
                    <div className="icon-container" id="shopping-cart-icon">
                        <Link to={"/cart"}><ShoppingCart/></Link>
                    </div>
                    <div className="icon-container">
                        <Link to={"/login"}><AccountCircleOutlined/></Link>
                    </div>
                    <div className="icon-container menu-bar">
                        <Menu/>
                    </div>
                </div>
            </div>
        </header>
    )
};