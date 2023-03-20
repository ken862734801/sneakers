import { Product } from "../common/types";
import { Link } from "react-router-dom";

export default function ProductCard(props: Product){
    return (
        <div className="product-card">
            <img src={props.images[0]}/>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
    )
}