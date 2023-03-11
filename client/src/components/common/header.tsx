import { Link } from "react-router-dom";
import { ShoppingCart, Search, AccountCircleOutlined } from "@material-ui/icons";

export default function Header (){
    return (
        <header>
            <Link to={"/"}>Sneakers</Link>
            <nav>
                <Link to={"/men"}>Men</Link>
                <Link to={"/women"}>Women</Link>
                <Link to={"/kids"}>Kids</Link>
                <Link to={"/sale"}>Sale</Link>
            </nav>
            <div>
                <Link to={"/cart"}><ShoppingCart/></Link>
            </div>
        </header>
    )
};