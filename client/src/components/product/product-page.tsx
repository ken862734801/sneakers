import React, { useState, useEffect } from "react";
import { Page } from "../common/types";

export default function ProductPage(props: any){
    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${props.path}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }, [props.path]);
    
    return(
        <div className="product-page">
            <div className="page-header">
                <h2 className="page-title">{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}