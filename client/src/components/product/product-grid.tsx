import React, { useState, useEffect } from "react";
import { Product } from "../common/types";
import ProductCard from "./product-card";
import "../../styles/product-grid.css";

export default function ProductGrid(props: any){

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/${props.path}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [props.path]);
    console.log(data);

    return(
        <div className="product-grid-page">
            <div className="page-header">
                <h2 className="page-title">{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="product-grid">
                {data.map((product, index) => {
                    return <ProductCard 
                                key={index}
                                sku={product.sku} 
                                name={product.name} 
                                images={product.images} 
                                price={product.price}
                            />
                })}
            </div>
        </div>
    )
}