import "../../styles/side-nav.css";
import { AccountCircleOutlined, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function SideNav(){
    return (
        <div className="sidenav">
            <div className="sidenav-container">
                <div className="sidenav-header">
                    <div className="sidenav-header-container">
                        <Close/>
                    </div>
                </div>
                <div className="sidenav-body">
                    <div className="">
                        <Link to={"/login"}><AccountCircleOutlined/></Link>
                    </div>
                    <nav>
                        <Link to={"/men"}>Men</Link>
                        <Link to={"/women"}>Women</Link>
                        <Link to={"/kids"}>Kids</Link>
                        <Link to={"sale"}>Sale</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}