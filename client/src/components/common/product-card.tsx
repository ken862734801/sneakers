import { Product } from "./types"

export default function ProductCard(props: Product){
    return (
        <div className="product-card">
            <img src={props.image}/>
            <p>{props.name}</p>
            {/* <p>{props.category}'s Sneakers</p> */}
            <p>${props.price}</p>
        </div>
    )
}