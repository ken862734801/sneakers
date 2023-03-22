import "../../styles/widget.css";
import { Favorite, Star } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Widget (){
    return (
        <div className="widget">
            <div className="widget-left-container">
                    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png"></img>
            </div>
            <div className="widget-right-container">
                <h6 className="widget-product-name">Jordan Sophia</h6>
                <div className="widget-product-rating">
                    <p><span></span>(4.5)</p>
                </div>
                <div className="widget-product-row">
                    <p className="widget-product-price">$100</p>
                    <Favorite fontSize="small"/>
                </div>
                <p className="widget-product-style">Women's</p>
                <Link className="widget-link" to={"/us/jordan-sophia/do8863-600"}>
                    <p className="widget-add-btn">Add to Cart</p>
                </Link>
            </div>
        </div>
    )
}