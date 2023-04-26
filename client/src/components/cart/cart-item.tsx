import { useContext } from "react";
import "../../styles/cart-item.css";
import { Close } from "@material-ui/icons";
import { CartContext } from "../../context";

export default function CartItem(props:any){

    const {cart, setCart} = useContext(CartContext);

    const removeItem = (sku: string) => {
        const updatedCart = cart.filter((item: any) => item.sku !== sku);
        setCart(updatedCart);
    };

    return (
        <div className="cart-item">
            <div className="cart-item-container">
                <div className="cart-item-remove-btn-container">
                    <Close className="remove-btn" onClick={() => removeItem(props.sku)}/>
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
                                            <option>{props.size}</option>
                                        </select>
                                    </span>
                                </p>
                                <p className="cart-item-quantity">Quantity:
                                    <span className="cart-item-quantity--span">
                                        <select>
                                            <option>{props.quantity}</option>
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