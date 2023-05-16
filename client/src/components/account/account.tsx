import "../../styles/account-page.css";
import { useState, useEffect, useContext } from "react";
import ProductCard from "../product/product-card";
import { ProductCardProps } from "../common/types";
import { UserContext } from "../../context/UserContext";

export default function Account(props: any){

    const {userInformation} = useContext(UserContext);
    const { setIsLoggedIn} = props;
    const [favoriteData, setFavoriteData] = useState<ProductCardProps[]>([]);
    const [recommendedData, setRecommendedData] = useState<ProductCardProps[]>([]);


    useEffect(() => {
        fetch(`https://secret-falls-93039.herokuapp.com/api/product/new`)
          .then(response => response.json())
          .then(data => setRecommendedData(data))
      }, [])

    useEffect(()=> {
        fetch(`https://secret-falls-93039.herokuapp.com/api/product`)
            .then(response => response.json())
          .then(data => setFavoriteData(data))
    }, [])

    function handleFavoriteProduct() {
      if (!userInformation || !favoriteData) {
        return "LOADING...";
      }
  
      const favoriteArr = userInformation.favorites.split(",");
  
      const favoriteProducts = favoriteData.filter((data) =>
        favoriteArr.includes(data.sku)
      );
  
      return favoriteProducts.map((data, index) => (
        <ProductCard
          key={index}
          sku={data.sku}
          name={data.name}
          price={data.price}
          style={data.style}
          images={data.images}
          onSale={data.onSale}
        />
      ));
    }
    function handleRecommendedProduct (){
        if (!recommendedData) {
            return "LOADING..."
          }
        return recommendedData.map((data, index) => (
            <ProductCard key={index} sku={data.sku} name={data.name} price={data.price} style={data.style} images={data.images} onSale={data.onSale}></ProductCard>
            ))
    }

    console.log(userInformation);
    return(
        <div className="account-page">
            <div className="account-page-container">
                <p>Welcome back, {`${userInformation?.firstName}!`}</p>
                {/* <p>Email</p>
                <p>{userInformation.email}</p> */}
                <div className="wishlist">
                <h1>Your Wishlist</h1>
                {userInformation && userInformation.favorites && userInformation.favorites.length > 0 ? (
                    <div className="wishlist-container--true">
                      <div className="wishlist-grid">{handleFavoriteProduct()}</div>
                    </div>
                  ) : (
                    <div className="wishlist-container--false">
                      <p>
                        You haven't saved any items to your wishlist yet. Check out
                        these popular items.
                      </p>
                      <div className="wishlist-grid">{handleRecommendedProduct()}</div>
                    </div>
                  )}
                </div>
            </div>
        </div>
    )
}