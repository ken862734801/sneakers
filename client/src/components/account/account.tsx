import "../../styles/account-page.css";
import { useState, useEffect } from "react";
import ProductCard from "../product/product-card";
import { ProductCardProps } from "../common/types";
export default function Account(props: any){

    const {userInformation, setIsLoggedIn} = props;
    const [recommendedData, setRecommendedData] = useState<ProductCardProps[]>([]);
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/product/new`)
          .then(response => response.json())
          .then(data => setRecommendedData(data))
      }, [])

    function handleRecommendedProduct (){
        if (!recommendedData) {
            return "LOADING..."
          }
        return recommendedData.map((data, index) => (
            <ProductCard key={index} sku={data.sku} name={data.name} price={data.price} style={data.style} images={data.images} onSale={data.onSale}></ProductCard>
            ))
    }

    return(
        <div className="account-page">
            <div className="account-page-container">
                <p>Welcome back, {`${userInformation.firstName}!`}</p>
                {/* <p>Email</p>
                <p>{userInformation.email}</p> */}
                <div className="wishlist">
                <h1>Your Wishlist</h1>
                {userInformation.favorites.length > 0 ? (
                    <div className="wishlist-container--true">{/* Render the content when there are favorites */}</div>
                ) : (
                    <div className="wishlist-container--false">
                        <p>You haven't saved any items to your wishlist yet. Check out these popular items.</p>
                        <div className="wishlist-grid">
                            {handleRecommendedProduct()}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}