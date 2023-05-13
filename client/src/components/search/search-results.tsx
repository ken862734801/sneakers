import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { ProductCardProps } from "../common/types";
import ProductCard from "../product/product-card";
import "../../styles/search-results.css";

export default function SearchResults(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchText = searchParams.get('q');
    console.log(searchText);

    const [matchingProducts, setMatchingProducts] = useState<ProductCardProps[]>([]);
    const [IsRecommended, setIsRecommended] = useState<boolean>(false);


    async function fetchData(){
        try{
            const response = await fetch(`http://localhost:8080/api/product/search?query=${searchText}`);
            const data = await response.json();
            setMatchingProducts(data);
            if (data.length === 0){
                const featuredResponse = await fetch("http://localhost:8080/api/product/new");
                const featuredData = await featuredResponse.json();
                setMatchingProducts(featuredData);
                setIsRecommended(true);
            } else {
                setMatchingProducts(data);
                setIsRecommended(false);
            }
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
            <div className="search-result-page-container">
                <div className="page-header">
                    <p>Search results for:</p>
                    <h4 className="search-text">{`"${searchText}" `}</h4>
                    {/* <span className="search-result-length">{(`[${matchingProducts.length}]`)}</span> */}
                    {IsRecommended ? (
                        <div className="no-results-text">
                            There were no matching results. Try these recommendations.
                        </div>
                        ) : matchingProducts.length > 0 ? (
                        <div className="no-results-text">
                            <p>Browse the following <span className="data-length">{`${matchingProducts.length}`}</span> number of styles.</p>
                        </div>
                        ) : null}
                </div>
                <div className="product-grid results-grid">
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
        </div>
    )
}