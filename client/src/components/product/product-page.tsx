import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Product } from "../common/types";

export default function ProductPage(){
    let {id} = useParams();
    const [data, setData] = useState<Product | undefined>();

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`http://localhost:8080/api/product/${id?.toUpperCase()}`);
          const data = await response.json();
          setData(data);
        }
        fetchData();
      }, []);

      console.log(data?.name);

    return (
        <div className="product-detail-page">
            <p>This is the {id} product page!</p>
            <p>{data?.name}</p>
            <img src={data?.images[0]}/>
        </div>
    )
};