import React, { useState, useEffect } from "react";
import ProductCard from "./product-card";
import "../../styles/product-grid.css";
import { ProductCardProps } from "../common/types";

export default function ProductGrid(props: any){

    const [data, setData] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        fetch(`https://secret-falls-93039.herokuapp.com/api/product/${props.path}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [props.path]);
    console.log(data);

    function renderProductCards(){
        if(!data){
            return "LOADING..."
        }
        return data.map((data, index) => (
            <ProductCard key={index}
                         sku={data.sku}
                         name={data.name}
                         images={data.images}
                         price={data.price}
                         style={data.style}
                         onSale={data.onSale}></ProductCard>
        ))
    }

    return(
        <div className="product-grid-page">
            <div className="product-grid-page-container">
                <div className="page-header">
                    <h2 className="page-title">{props.name}</h2>
                    <p className="page-description">{props.description}</p>
                </div>
                <div className="product-grid">
                    {renderProductCards()}
                </div>
            </div>
        </div>
    )
}