import React, { useState, useEffect } from "react";
import ProductCard from "./product-card";
import "../../styles/product-grid.css";
import { ProductCardProps } from "../common/types";

export default function ProductGrid(props: any){

    const [data, setData] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/${props.path}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [props.path]);
    console.log(data);

    return(
        <div className="product-grid-page">
            <div className="product-grid-page-container">
                <div className="page-header">
                    <h2 className="page-title">{props.name}</h2>
                    <p className="page-description">{props.description}</p>
                </div>
                <div className="product-grid">
                    {data.map((product, index) => {
                        return <ProductCard 
                                    key={index}
                                    sku={product.sku} 
                                    name={product.name} 
                                    images={product.images} 
                                    price={product.price}
                                    style = {product.style}
                                    onSale = {product.onSale}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}