import "../../styles/widget.css";
import { Favorite, Star } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Widget (){
    return (
        <div className="widget">
            <div className="widget-left-container">
                    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png"></img>
            </div>
            <div className="widget-right-container">
                <h6 className="widget-product-name">Air Jordan 1 Low</h6>
                <div className="widget-product-rating">
                    <FontAwesomeIcon className="widget-star" icon={faStar} style={{fontSize: "8px"}}/>
                    <p>(4.5)</p>
                </div>
                <div className="widget-product-row">
                        <p className="widget-product-price">$200</p>
                        <FontAwesomeIcon className="widget-heart-btn" icon={faHeart} style={{fontSize: "14px", marginTop: "4px"}} />
                </div>
                <p className="widget-product-style">Men's</p>
                <Link className="widget-link" to={"/us/jordan-sophia/do8863-600"}>
                    <p className="widget-add-btn">Add to Cart</p>
                </Link>
            </div>
        </div>
    )
}