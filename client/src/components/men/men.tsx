import React, { useState, useEffect } from "react";

export default function Men (){
    // const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div className="men">
            <div className="page-header">
                <h2 className="page-title">Men's Sneakers</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit provident eveniet laborum reiciendis. Perferendis magnam architecto voluptatibus nihil maiores!</p>
            </div>
            <div className="product-container"></div>
        </div>
    )
}