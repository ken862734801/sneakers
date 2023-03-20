import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Product } from "../common/types";

export default function ProductPage(){
    const [data, setData] = useState<Product[]>([]);

    let {id} = useParams();
        useEffect(() => {
            fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`)
                .then(response => response.json())
                .then(data => setData(data));
        }, []);
        console.log(data);

    return (
        <div className="product-detail-page">
            <p>This is the {id} product page!</p>
        </div>
    )
};