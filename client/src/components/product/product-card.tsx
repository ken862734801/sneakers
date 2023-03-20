import { Product } from "../common/types";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";

export default function ProductCard(props: Product){
    let productName = (props.name).split(" ").join("-");

    return (
        <Link to={`/us/${productName.toLowerCase()}/${(props.sku).toLowerCase()}`}>
            <div className="product-card" id={props.sku}>
                <img src={props.images[0]}/>
                <p>{props.name}</p>
                <p>${props.price}</p>
            </div>
        </Link>
    )
}