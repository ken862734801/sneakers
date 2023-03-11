import "../../styles/footer.css";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import tiktok from "../../images/tiktok.png";
import twitter from "../../images/twitter.png";

export default function Footer (){
    return (
        <section className="footer-section">
            <div className="footer-container">
                <div className="footer-left-container">
                    <div className="footer-button-container">
                        <button className="social-media-button">
                            <img src={instagram}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={twitter}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={facebook}></img>
                        </button>
                        <button className="social-media-button">
                            <img src={tiktok}></img>
                        </button>
                    </div>
                </div>
                <div className="footer-right-container"></div>
            </div>
            <footer></footer>
        </section>
    )
}