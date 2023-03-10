import { Link } from "react-router-dom";

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
        </header>
    )
};