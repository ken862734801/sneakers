import "../../styles/footer.css";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import TikTok from "../../images/tiktok.png";
import Twitter from "../../images/twitter.png";
import Nike from "../../images/nike.png";

interface FooterProps {
    blurLevel: number;
}
export default function Footer ({blurLevel}:FooterProps){
    return (
        <section style={{filter: `blur(${blurLevel}px)`}} className="footer-section">
            <div className="footer-container">
                <div className="footer-left-container">
                    <img src={Nike}></img>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis sequi fuga excepturi consequatur. 
                       Aperiam at totam exercitationem vel illum nesciunt, architecto sunt dolorem voluptatem. Lorem ipsum dolor sit amet.</p>
                    <div className="footer-button-container">
                        <button className="social-media-button">
                            <img src={Instagram}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={Twitter}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={Facebook}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={TikTok}></img>
                        </button>
                    </div>
                </div>
                <div className="footer-right-container">
                    <ul>
                        <li>Quick Links</li>
                        <li>Home</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                    </ul>
                    <ul>
                        <li>Find Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Payment Policy</li>
                    </ul>
                    <ul>
                        <li>Get Help</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Payment Policy</li>
                    </ul>
                </div>
            </div>
            <footer></footer>
        </section>
    )
}