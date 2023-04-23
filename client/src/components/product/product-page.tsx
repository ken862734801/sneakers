import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductCardProps, ProductDetailProps } from "../common/types";
import "../../styles/product-page.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";

interface InventoryDataType {
    sku: string,
    size: string,
}

export default function ProductPage(){
    let {id} = useParams();
    const [selectedSize, setSelectedSize] = useState("");
    const [productData, setProductData] = useState<ProductDetailProps | undefined>();
    const [inventoryData, setInventoryData] = useState<InventoryDataType[]>([]);
    const [recommendedData, setRecommendedData] = useState<ProductCardProps[]>([]);

    const onSaleBoolean = productData?.onSale;
    console.log(onSaleBoolean);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`);
          const data = await response.json();
          setProductData(data);
        }
        fetchData();
      }, []);

      console.log(productData);
      console.log(productData?.category);

      useEffect(()=> {
        async function fetchInventoryData(){
            const response = await fetch(`http://localhost:8080/api/inventory/${id?.toUpperCase()}`);
            const data = await response.json();
            setInventoryData(data);
        }
        fetchInventoryData();
      }, [])

      console.log(recommendedData);
      console.log(inventoryData)

      function handleThumbnailClick(event: React.MouseEvent<HTMLImageElement>) {
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active-thumbnail');
        });
        const mainImage = document.querySelector('.product-main-image') as HTMLImageElement;
        const target = event.target as HTMLImageElement;
        mainImage.src = target.src;
        event.currentTarget.classList.add('active-thumbnail');
    }

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div className="product-detail-left-container">
                    <div className="product-main-image-container">
                        <img className="product-main-image" src={productData?.images[0]}/>
                    </div>
                    <div className="product-thumbnails-container">
                    {productData?.images.map((image, index) => (
                            <img 
                                className={`product-thumbnail ${index === 0 ? 'active-thumbnail' : ''}`} 
                                src={image} 
                                key={index}
                                onClick={handleThumbnailClick}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-detail-right-container">
                    <h2 className="product-name">{productData?.name}</h2>
                    <p className="product-style">{productData?.style}</p>
                    {onSaleBoolean?
                     (<div className="product-price-row">
                        <p className="orange">${productData?.price}</p>
                        <span>$200</span>
                     </div>) : 
                     (<p className="product-price">${productData?.price}</p>)}
                    <div className="product-size-row">
                        <p>Select Size</p>
                        <p className="size-guide-text">Size Guide</p>
                    </div>
                    <div className="size-buttons">
                        {inventoryData?.map(data => (
                            <button className={selectedSize === data.size? "selected-size size-button": "size-button"} key={data.sku} onClick={() => setSelectedSize(data.size)}>{data.size}</button>
                        ))}
                    </div>
                    <p className="payment-text">10 interest-free payments of <span className="orange">$10.00</span> with Klarna.</p>
                    <div className="product-detail-button-container">
                        <button className="add-to-bag-button">Add to Bag</button>
                        <button className="add-to-favorite-button">Add to Favorites</button>
                    </div>
                    <p className="product-description">{productData?.description}</p>
                </div>
            </div>
            {/* <div className="recommended-items">
                <p>You Might Also Like:</p>
                <div className="recommended-items-container"></div>
            </div> */}
        </div>
    )
};