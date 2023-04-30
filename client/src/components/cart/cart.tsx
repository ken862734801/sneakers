import "../../styles/cart.css";
import CartItem from "./cart-item";
import { CartContext } from "../../context";
import { useContext } from "react";

export default function Cart (){
    const {cart} = useContext(CartContext);
    const subtotalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const shippingPrice = (cart.length) * 5;
    const taxPrice = shippingPrice;

    const totalPrice = subtotalPrice + shippingPrice + taxPrice;

    return (
        <div className="cart-page">
            <div className="cart">
                <div className="cart-left-container">
                        {cart.length > 0? 
                        (<div className="cart-left-container--true">
                            <h2>Cart (<span>{`${cart.length}`}</span>)</h2>
                            <p>Items in your bag are not reserved — check out now to make them yours.</p>
                            <div className="cart-item-list-container--true">
                                {cart.map((item) => (
                                    <CartItem
                                        key={item.sku}
                                        name={item.name}
                                        price={item.price}
                                        sku={item.sku}
                                        style={item.style}
                                        image={item.image}
                                        quantity ={item.quantity}
                                        sizes={item.sizes}
                                        size={item.size}
                                        // price={item.price}
                                        // sku={item.sku}
                                        // style={item.style}
                                        // image={item.image}
                                    />
                                ))}
                            </div>
                        </div>) :
                        (<div className="cart-left-container--false">
                                <h2>Cart (<span>{`${cart.length}`}</span>)</h2>
                                <p>Items you add to your cart will be saved here for you.</p>
                            <div className="cart-item-list-container--false">
                                <p>There is nothing in your cart right now.</p>
                            </div>
                        </div>)}
                </div>
                <div className="cart-right-container">
                    <div className="cart-right-container-header">
                        <h2>Order Summary</h2>
                    </div>
                    <div className="cart-right-container-summary">
                        <div className="cart-right-subtotal-row">
                            <p>Subtotal</p>
                            <p className="cart-right-subtotal-price">${subtotalPrice}</p>
                        </div>
                        <div className="cart-right-shipping-handling-row">
                            <p>Estimated Shipping & Handling</p>
                            <p className="cart-right-shipping-handling-price">${shippingPrice}</p>
                        </div>
                        <div className="cart-right-tax-row">
                            <p>Estimated Tax</p>
                            <p className="cart-right-tax-price">${taxPrice}</p>
                        </div>
                        <div className="cart-right-total-row">
                            <p>Total</p>
                            <p className="cart-right-total-price">${totalPrice}</p>
                        </div>
                        <div className="cart-right-checkout-btn-container">
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}