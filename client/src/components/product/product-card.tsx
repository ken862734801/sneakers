import {ProductCardProps } from "../common/types";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { useState } from "react";

export default function ProductCard(props: ProductCardProps){

    const [isHovered, setIsHovered] = useState(false);

    // function handleMouseEnter(){
    //     setTimeout(()=> {
    //         setIsHovered(true);
    //     }, 500)
    // };
    // function handleMouseLeave(){
    //     setTimeout(() => {
    //         setIsHovered(false);
    //     }, 500)
    // };
    
    let productName = (props.name).split(" ").join("-");

    return (

            <div className="product-card" id={props.sku}>
                <Link to={`/us/${productName.toLowerCase()}/${(props.sku).toLowerCase()}`}>
                    {/* <div className="product-card-header">
                        <FavoriteBorderOutlined className="favorite-button" fontSize="small"/>
                    </div> */}
                    <div className="product-card-image-container"
                      onMouseEnter={() => setIsHovered(true)} 
                      onMouseLeave={() =>setIsHovered(false)}
                      >
                        <img className="product-card-image" src={isHovered ? props.images[3] : props.images[0]}/>
                    </div>
                    <div className="product-card-text-container">
                        <p className="product-card-name">{props.name}</p>
                        <p className="product-card-style">{props.style}</p>
                        <p className="product-card-price">${props.price}</p>
                    </div>
                </Link>
            </div>

    )
}