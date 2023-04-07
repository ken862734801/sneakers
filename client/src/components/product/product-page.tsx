import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetailProps } from "../common/types";

export default function ProductPage(){
    let {id} = useParams();

    const [productData, setProductData] = useState<ProductDetailProps | undefined>();
    const [inventoryData, setInventoryData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`);
          const data = await response.json();
          setProductData(data);
        }
        fetchData();
      }, []);

      console.log(productData);

    //   useEffect(()=> {
    //     async function fetchInventoryData(){
    //         const response = await fetch(`http://localhost:8080/api/inventory/${id?.toUpperCase()}`);
    //         const data = await response.json();
    //         console.log(data);
    //     }
    //     fetchInventoryData();
    //   }, [])


    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div className="product-detail-left-container">
                    <p>{productData?.name}</p>
                    <p>{productData?.style}</p>
                    <p>${productData?.price}</p>
                    <img src={productData?.images[0]}/>
                    <p>{productData?.description}</p>
                </div>
                <div className="product-detail-right-container"></div>
            </div>
        </div>
    )
};