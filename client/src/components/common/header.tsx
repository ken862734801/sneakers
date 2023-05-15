import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined, Menu, Close } from "@material-ui/icons";
import { Page } from "./types";
import "../../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nike from "../../images/nike.png";
import { useState, useEffect, useContext, ChangeEvent, KeyboardEvent } from "react";
import { CartContext } from "../../context";
import { useScrollDirection } from "./scroll";

interface HeaderProps {
    loggedIn: boolean;
    setIsLoggedIn: (login: boolean) => void;
    page: Page;
    onPageChange: (newPage: Page) => void;
    setShowSideNav: (show: boolean) => void;
    blurLevel: number;
    setBlurLevel : (blur: number) => void;
}

export default function Header ({page, onPageChange, setShowSideNav, blurLevel, setBlurLevel, loggedIn, setIsLoggedIn}: HeaderProps){
    const {cart} = useContext(CartContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          if (target.closest && target.closest('.account-dropdown') === null) {
            setShowDropdown(false);
          }
        };
      
        if (showDropdown) {
          document.addEventListener('click', handleOutsideClick);
        }
      
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [showDropdown]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
      };    
    const handleClearClick = () => {
        setSearchText('');
    };

    const navigate = useNavigate();

    function handlePageNavigation(path: string){
        navigate(path);
    }
    function handleSearchSubmit(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter" && searchText.trim() !== ""){
            setIsSubmitted(true);
            navigate({
                pathname:"search",
                search: `?q=${searchText}`
            });
            handleClearClick();
            handleHideSearchBar();
        }
    };
    function handleSideNavOpen(){
        setShowSideNav(true);
        setBlurLevel(2);
        setShowDropdown(false);
    }
    function handleScrollTop(){
        window.scrollTo(0,0);
    };
    function handleShowSearchBar(){
        setShowSearchBar(true)
    };
    function handleHideSearchBar(){
        setShowSearchBar(false);
        handleClearClick();
        handleScrollTop();
    };
    function handleLogout() {
        // Clear the token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.alert("You have succesfully logged out!")
      }

    const scrollDirection = useScrollDirection();

    return (
        <header className={`${scrollDirection === "down" ? "hide": "show"}`} style={{filter: `blur(${blurLevel}px)`}}>
            {showSearchBar ? (
                <div className="search-container">
                    <div className="brand-logo-container">
                        <Link to={"/"} onClick={handleHideSearchBar}>
                            <img src={Nike}></img>
                        </Link>
                    </div>
                    <div className="searchbar-container">
                        <div className="searchbar">
                            <div className="searchbar-search-icon-container">
                                <Search style={{fontSize: "23px"}}/>
                            </div>
                            <input className="search-input" 
                                type="text"
                                value={searchText}
                                onChange={handleInputChange}
                                onKeyDown={handleSearchSubmit}
                                placeholder="Search...">
                                </input>
                            {searchText && (
                                <div className="searchbar-clear-button-container">
                                    <Close className="clear-button" onClick={handleClearClick} style={{fontSize: "22px"}}/>
                                </div>
                            )}
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
                        <div className="account-dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                            <AccountCircleOutlined />
                            {showDropdown && (
                            <div className="dropdown-menu">
                                {loggedIn ? (
                                <>
                                    <p onClick={()=> handlePageNavigation("/account")}>View Account</p>
                                    <p onClick={handleLogout}>Sign Out</p>
                                </>
                                ) : (
                                <p onClick={()=> handlePageNavigation("/login")}>Sign In</p>
                                )}
                            </div>
                            )}
                        </div>
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