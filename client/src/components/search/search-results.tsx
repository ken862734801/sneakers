import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { ProductCardProps } from "../common/types";
import ProductCard from "../product/product-card";

export default function SearchResults(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchText = searchParams.get('q');
    console.log(searchText);

    const [matchingProducts, setMatchingProducts] = useState<ProductCardProps[]>([]);

    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await fetch(`http://localhost:8080/api/product/search?query=${searchText}`);
    //         const data = await response.json();
    //         setMatchingProducts(data);
    //     }
    //     fetchData();
    // }, []);

    async function fetchData(){
        try{
            const response = await fetch(`http://localhost:8080/api/product/search?query=${searchText}`);
            const data = await response.json();
            setMatchingProducts(data);
        } catch (error){
            console.log("Error!")
        }
    };

    useEffect(()=> {
        fetchData();
    }, [searchText])

    console.log(matchingProducts);
    return (
        <div className="search-result-page">
            <div className="product-grid">
                {matchingProducts.map((product, index)=> {
                    return <ProductCard 
                                key={index}
                                sku={product.sku}
                                name={product.name}
                                images={product.images}
                                price={product.price}
                                style={product.style}
                                onSale={product.onSale}
                            />
                })}
            </div>
        </div>
    )
}