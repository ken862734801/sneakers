import "../../styles/account-page.css";
import { useState, useEffect, useContext } from "react";
import ProductCard from "../product/product-card";
import { ProductCardProps } from "../common/types";
import { UserContext } from "../../context/UserContext";

export default function Account(props: any){

  const { userInformation } = useContext(UserContext);
  const [favoriteData, setFavoriteData] = useState<ProductCardProps[]>([]);
  const [recommendedData, setRecommendedData] = useState<ProductCardProps[]>([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);

  console.log(userInformation);
  
  useEffect(() => {
    fetch("https://secret-falls-93039.herokuapp.com/api/product/new")
      .then((response) => response.json())
      .then((data) => setRecommendedData(data));
  }, []);

  useEffect(() => {
    fetch("https://secret-falls-93039.herokuapp.com/api/product")
      .then((response) => response.json())
      .then((data) => setFavoriteData(data));
  }, []);

  useEffect(() => {
    if (!userInformation || !favoriteData) {
      return;
    }

    const fetchUserFavorites = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${userInformation.id}`
        );
        if (!response.ok) {
          throw new Error("Error fetching user favorites");
        }
        const userData = await response.json();

        if (!Array.isArray(userData.favorites)) {
          throw new Error("Invalid user favorites data");
        }

        const favoriteArr = userData.favorites;
        const favoriteProducts = favoriteData.filter((data) =>
          favoriteArr.includes(data.sku)
        );
        setFavoriteData(favoriteProducts);
        setFavoritesLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserFavorites();
  }, [userInformation]);

    function handleFavoriteProduct() {
      if (!userInformation || !favoritesLoaded) {
        return "LOADING...";
      }
    
      const favoriteProducts = favoriteData.filter((data) =>
        userInformation.favorites.includes(data.sku)
      );
    
      return favoriteProducts.map((data) => (
        <ProductCard
          key={data.sku} // Use a unique and stable identifier as the key
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

    // console.log(userInformation?.favorites.length);
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