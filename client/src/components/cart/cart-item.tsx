import "../../styles/cart-item.css";
import { Close } from "@material-ui/icons";
export default function CartItem(props:any){
    return (
        <div className="cart-item">
            <div className="cart-item-container">
                <div className="cart-item-remove-btn-container">
                    <Close className="remove-btn"/>
                </div>
                <div className="cart-item-column-container">
                    <div className="cart-item-column-left">
                        <div className="cart-item-image-container">
                            <img src={props.image}></img>
                        </div>
                    </div>
                    <div className="cart-item-column-right">
                        <div className="cart-item-text-container">
                            <div className="cart-item-name-price-row">
                                <p className="cart-item-name">{props.name}</p>
                                <p className="cart-item-price">${props.price}</p>
                            </div>
                            <p className="cart-item-sku"><span className="cart-item-sku--span">Sku:</span> {props.sku}</p>
                            <p className="cart-item-style"><span className="cart-item-style--span">Style:</span>{props.style}</p>
                            <div className="cart-item-size-quantity-row">
                                <p className="cart-item-size">Size:
                                    <span className="cart-item-size--span">
                                        <select>
                                            <option>8</option>
                                        </select>
                                    </span>
                                </p>
                                <p className="cart-item-quantity">Quantity:
                                    <span className="cart-item-quantity--span">
                                        <select>
                                            <option>10</option>
                                        </select>
                                    </span>
                                </p>
                            </div>
                            <p className="cart-item-shipping"><span className="cart-item-shipping--span">Estimated Delivery Date:</span> Arrives by Mon, May 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}