import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetailProps } from "../common/types";

export default function ProductPage(){
    let {id} = useParams();
    const [data, setData] = useState<ProductDetailProps | undefined>();

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`);
          const data = await response.json();
          setData(data);
        }
        fetchData();
      }, []);

      console.log(data);

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div className="product-detail-left-container">
                    <p>{data?.name}</p>
                    <p>{data?.style}</p>
                    <p>${data?.price}</p>
                    <img src={data?.images[0]}/>
                    <p>{data?.description}</p>
                </div>
                <div className="product-detail-right-container"></div>
            </div>
        </div>
    )
};