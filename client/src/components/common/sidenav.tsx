import "../../styles/side-nav.css";
import { AccountCircleOutlined, Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideNav(props: {
  isLoggedIn: boolean,
  setIsLoggedIn: (param: boolean) => void,
  showSideNav: boolean,
  setShowSideNav: (show: boolean) => void,
  setBlurLevel: (blur: number) => void
}) {
  const { isLoggedIn, setIsLoggedIn, showSideNav, setShowSideNav, setBlurLevel } = props;
  const [accordionOpen, setAccordionOpen] = useState(false); // Add state for accordion open/close

  function handleSideNavClose() {
    setShowSideNav(false);
    window.scrollTo(0, 0);
    setBlurLevel(0);
  }

  // Toggle the accordionOpen state
  function handleAccordionToggle() {
    setAccordionOpen(!accordionOpen);
  }

  function handleLogout() {
    // Clear the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userInformation');
    setIsLoggedIn(false);
    window.alert("You have succesfully logged out!");
    handleSideNavClose();
  }


  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <div className="sidenav-header">
          <div className="sidenav-header-container">
            <div className="icon-container">
              <Close className="close-sidenav-btn" onClick={handleSideNavClose} />
            </div>
          </div>
        </div>
        <div className="sidenav-body">
          <nav className="sidenav-links">
            <div className="sidenav-link" onClick={handleAccordionToggle}>
              <AccountCircleOutlined />
            </div>
            {isLoggedIn ? (
                <div className={`accordion-content ${accordionOpen ? "open" : "hide"}`}>
                  <Link className="sidenav-link option" to={"/account"} onClick={handleSideNavClose}>
                    View Account
                  </Link>
                  <Link className="sidenav-link option" to={"/login"} onClick={handleLogout}>
                    Sign Out
                  </Link>
                </div>
              ) : (
                <div className={`accordion-content ${accordionOpen ? "open" : "hide"}`}>
                  <Link className="sidenav-link option" to={"/login"} onClick={handleSideNavClose}>
                    Sign In
                  </Link>
                </div>
              )}
            <Link className="sidenav-link" to={"/men"} onClick={handleSideNavClose}>
              Men
            </Link>
            <Link className="sidenav-link" to={"/women"} onClick={handleSideNavClose}>
              Women
            </Link>
            <Link className="sidenav-link" to={"/kids"} onClick={handleSideNavClose}>
              Kids
            </Link>
            <Link className="sidenav-link" to={"/sale"} onClick={handleSideNavClose}>
              Sale
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}