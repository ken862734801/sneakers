import {ProductCardProps } from "../common/types";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { FavoriteBorderOutlined } from "@material-ui/icons";

export default function ProductCard(props: ProductCardProps){
    let productName = (props.name).split(" ").join("-");

    return (

            <div className="product-card" id={props.sku}>
                <Link to={`/us/${productName.toLowerCase()}/${(props.sku).toLowerCase()}`}>
                    <div className="product-card-header">
                        <FavoriteBorderOutlined fontSize="small"/>
                    </div>
                    <div className="product-card-image-container">
                        <img src={props.images[0]}/>
                    </div>
                    <div className="product-card-text-container">
                        <p className="product-name">{props.name}</p>
                        <p className="product-style">{props.style}</p>
                        <p className="product-price">${props.price}</p>
                    </div>
                </Link>
            </div>

    )
}