import { Link } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined, Menu } from "@material-ui/icons";
import { Page } from "./types";
import "../../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    loggedIn: boolean;
    page: Page;
    onPageChange: (newPage: Page) => void;
}

export default function Header ({page, onPageChange}: HeaderProps){
   
    return (
        <header>
            <div className="header-container">
                <div className="brand-logo-container">
                    <Link to={"/"}>Sneakers</Link>
                </div>
                <nav>
                    <Link to={"/men"} onClick={() => onPageChange("men")}>Men</Link>
                    <Link to={"/women"} onClick={() => onPageChange("women")}>Women</Link>
                    <Link to={"/kids"} onClick={() => onPageChange("kids")}>Kids</Link>
                    <Link to={"/sale"} onClick={() => onPageChange("sale")}>Sale</Link>
                </nav>
                <div className="header-icon-container">
                    <div>
                        <div>
                            <Search/>
                        </div>
                    </div>
                    <div>
                        <Link to={"/cart"}><ShoppingCart/></Link>
                    </div>
                    <div>
                        <Link to={"/login"}><AccountCircleOutlined/></Link>
                    </div>
                    <div>
                        <Menu/>
                        {/* <FontAwesomeIcon icon={faBars}/> */}
                    </div>
                </div>
            </div>
        </header>
    )
};