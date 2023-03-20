import "../../styles/widget.css";
import { Favorite } from "@material-ui/icons";
export default function Widget (){
    return (
        <div className="widget">
            <div className="widget-left-container">
                <div className="widget-image-container">
                    <img src=""></img>
                </div>
            </div>
            <div className="widget-right-container">
                <h6 className="widget-product-name">Nike Air Max 90 SE</h6>
                <div className="wiget-product-rating"></div>
                <div className="widget-product-row">
                    <p className="widget-product-price">$140</p>
                    <Favorite fontSize="small"/>
                </div>
                <p className="widget-product-style">Men's</p>
                <p className="widget-add-btn">Add to Cart</p>
            </div>
        </div>
    )
}