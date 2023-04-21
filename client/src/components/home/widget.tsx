import "../../styles/widget.css";
import { Favorite, Star } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { WidgetProps } from "../common/types";


export default function Widget (props: WidgetProps){
    const productName = (props.name).split(" ").join("-");
    return (
        <div className="widget">
            <div className="widget-image-container">
                    <img className="widget-image" src={props.images[0]}></img>
            </div>
            <div className="widget-text-container">
                <h6 className="widget-product-name">{props.name}</h6>
                <div className="widget-product-rating-row">
                    <FontAwesomeIcon className="widget-star" icon={faStar} style={{fontSize: "7px"}}/>
                    <p className="rating-text">(4.75)</p>
                </div>
                <div className="widget-product-price-row">
                        <h6 className="widget-product-price">${props.price}</h6>
                        <FontAwesomeIcon className="widget-heart-btn" icon={faHeart} style={{fontSize: "14px", marginTop: "4px"}} />
                </div>
                <p className="widget-product-style">{props.style}</p>
                <Link style={{ textDecoration: 'none' }} className="widget-link" to={`/us/${(productName).toLowerCase()}/${(props.sku).toLowerCase()}`}>
                    <p className="widget-add-btn">Add to Cart</p>
                </Link>
            </div>
        </div>
    )
}