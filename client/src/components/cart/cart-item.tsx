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

    const quantityOptions = [];
        for (let i = 1; i <= 10; i++) {
            quantityOptions.push(i);
        }

    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = Number(event.target.value);
        const updatedCart = cart.map((item: any) => {
            if(item.sku === props.sku){
                return {...item, size: newSize}
            }
            return item;
        })
        setCart(updatedCart)
    }
    const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newQuantity = Number(event.target.value);
        const updatedCart = cart.map((item: any) => {
            if(item.sku === props.sku){
                return {...item, quantity: newQuantity}
            }
            return item;
        })
        setCart(updatedCart)
    }

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
                                <p className="cart-item-price">${props.price * props.quantity}</p>
                            </div>
                            <p className="cart-item-sku"><span className="cart-item-sku--span">Sku:</span> {props.sku}</p>
                            <p className="cart-item-style"><span className="cart-item-style--span">Style:</span> {props.style}</p>
                            <div className="cart-item-size-quantity-row">
                                <p className="cart-item-size">Size:
                                    <span className="cart-item-size--span">
                                        <select value={props.size} onChange={handleSizeChange}>
                                            {(props.sizes).map((item:number) => (
                                                <option key={item}>{item}</option>
                                            ))}
                                        </select>
                                    </span>
                                </p>
                                <p className="cart-item-quantity">Quantity:
                                    <span className="cart-item-quantity--span">
                                        <select value={props.quantity} onChange={handleQuantityChange}>
                                            {quantityOptions.map((quantity) => (
                                                <option key={quantity}>{quantity}</option>
                                            ))}
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