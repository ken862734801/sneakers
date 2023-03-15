import { Product } from "./types"

export default function ProductCard(props: Product){
    return (
        <div className="product-card">
            <img src={props.images[0]}/>
            <p>{props.name}</p>
            {/* <p>{props.category}'s Sneakers</p> */}
            <p>${props.price}</p>
        </div>
    )
}