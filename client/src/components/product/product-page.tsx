import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductDetailProps } from "../common/types";
import "../../styles/product-page.css";


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

      useEffect(()=> {
        async function fetchInventoryData(){
            const response = await fetch(`http://localhost:8080/api/inventory/${id?.toUpperCase()}`);
            const data = await response.json();
            setInventoryData(data);
        }
        fetchInventoryData();
      }, [])

      console.log(inventoryData)

      function renderImageSplide(){
    
      }
      
    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div className="product-detail-left-container">
                    <div className="product-main-image-container">
                        <img className="product-main-image" src={productData?.images[0]}/>
                    </div>
                </div>
                <div className="product-detail-right-container">
                    <h2 className="product-name">{productData?.name}</h2>
                    <p className="product-style">{productData?.style}</p>
                    <p className="product-price">${productData?.price}</p>
                    <button>Add to Bag</button>
                    <p className="product-description">{productData?.description}</p>
                </div>
            </div>
        </div>
    )
};