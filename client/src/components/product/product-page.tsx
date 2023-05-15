import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ProductCardProps, ProductDetailProps } from "../common/types";
import "../../styles/product-page.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import { CartContext } from "../../context";

interface InventoryDataType {
    sku: string,
    size: string,
}

interface CartItemType {
    name: string;
    sku: string;
    price: number;
    style: string;
    sizes: any[],
    size: string;
    image: string;
    quantity: number;
  }

export default function ProductPage(props:any){
    const {userInformation, loggedIn} = props;
    const {cart, setCart} = useContext(CartContext);

    let {id} = useParams();
    const [selectedSize, setSelectedSize] = useState("");
    const [productData, setProductData] = useState<ProductDetailProps | undefined>();
    const [inventoryData, setInventoryData] = useState<InventoryDataType[]>([]);
    const [isFavorite, setIsFavorite] = useState(false);


    const onSaleBoolean = productData?.onSale;
    console.log(onSaleBoolean);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`);
          const data = await response.json();
          setProductData(data);
          setIsFavorite(userInformation.favorites.includes(data.sku));
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

      console.log(inventoryData)
      let sizeOptions:string[] = [];
      if (inventoryData){
        for(let i = 0; i < inventoryData.length; i++){
          sizeOptions.push(String(inventoryData[i].size))
        }
      }
      console.log(sizeOptions);

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

    function handleAddToCart() {
        if (!selectedSize){
          window.alert("Please select a size.");
          return;
        }
        const selectedInventory = inventoryData.find((item) => item.size === selectedSize);
      
        if (selectedInventory) {
          const existingCartItemIndex = cart.findIndex((item) => item.sku === selectedInventory.sku && item.size === selectedInventory.size);
          
          if (existingCartItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingCartItemIndex].quantity += 1;
            setCart(updatedCart);
          } else {
            const cartItem: CartItemType = {
              name: productData?.name || "",
              sku: selectedInventory.sku,
              price: productData?.price || 0,
              style: productData?.style || "",
              image: productData?.images[0] || "",
              sizes: sizeOptions,
              size: selectedInventory.size,
              quantity: 1,
            };
      
            setCart([...cart, cartItem]);
          }
          const sizeButtons = document.querySelectorAll(".size-button");
            sizeButtons.forEach((button) => {
              button.classList.remove("selected-size");
            });
            setSelectedSize("");
            window.alert(`Size ${selectedSize} ${productData?.name} has been added to your cart.`)
        }
      }

      async function handleAddToFavorites() {
        if(!loggedIn){
          window.alert("Login to add items to your wishlist!")
          return
        }
        const userId = userInformation.id;
        const productId = productData?.sku;
    
        if (isFavorite) {
          // Remove from favorites
          await fetch(`http://localhost:8080/api/users/${userId}/favorites/remove?productId=${productId}`, {
            method: "PUT",
          });
        } else {
          // Add to favorites
          await fetch(`http://localhost:8080/api/users/${userId}/favorites/add?productId=${productId}`, {
            method: "PUT",
          });
        }
    
        setIsFavorite(!isFavorite);
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
                        <button className="add-to-bag-button" onClick={handleAddToCart}>Add to Bag</button>
                        <button className="add-to-favorite-button" onClick={handleAddToFavorites}>
                          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        </button>
                    </div>
                    <p className="product-description">{productData?.description}</p>
                </div>
            </div>
        </div>
    )
};