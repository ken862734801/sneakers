import React, { useState, useEffect } from "react";
import { Product } from "../common/types";
import ProductCard from "../common/product-card";

export default function ProductGrid(props: any){


    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${props.path}`)
            .then(response => response.json())
            .then(data => setData(data));
                console.log(data);
    }, [props.path]);


    return(
        <div className="product-page">
            <div className="page-header">
                <h2 className="page-title">{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="product-grid">
                {data.map((product, index) => {
                    return <ProductCard 
                                key={index} 
                                name={product.name} 
                                images={product.images} 
                                price={product.price}
                            />
                })}
            </div>
        </div>
    )
}