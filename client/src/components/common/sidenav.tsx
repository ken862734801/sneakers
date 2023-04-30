import "../../styles/side-nav.css";
import { AccountCircleOutlined, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function SideNav(props: { showSideNav: boolean, setShowSideNav: (show: boolean) => void}){
    const { showSideNav, setShowSideNav } = props;

    function handleSideNavClose (){
        setShowSideNav(false);
    }
    return (
        <div className="sidenav">
            <div className="sidenav-container">
                <div className="sidenav-header">
                    <div className="sidenav-header-container">
                        <div className="icon-container">
                            <Close className="close-sidenav-btn" onClick={handleSideNavClose}/>
                        </div>
                    </div>
                </div>
                <div className="sidenav-body">
                    <div className="">
                        <Link to={"/login"} onClick={handleSideNavClose}><AccountCircleOutlined/></Link>
                    </div>
                    <nav>
                        <Link to={"/men"} onClick={handleSideNavClose}>Men</Link>
                        <Link to={"/women"} onClick={handleSideNavClose}>Women</Link>
                        <Link to={"/kids"} onClick={handleSideNavClose}>Kids</Link>
                        <Link to={"sale"} onClick={handleSideNavClose}>Sale</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}