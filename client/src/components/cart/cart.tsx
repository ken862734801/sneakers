import "../../styles/cart.css";
import CartItem from "./cart-item";
export default function Cart (){
    let cart:number[] = [1,2,3];

    return (
        <div className="cart-page">
            <div className="cart">
                <div className="cart-left-container">
                        {cart.length > 0? 
                        (<div>
                            <h2>Cart{` (${cart.length}) `}</h2>
                            <p>Items in your bag are not reserved — check out now to make them yours.</p>
                        </div>) :
                        (<div>
                            <div className="cart-left-container-header">
                                <h2>Cart</h2>
                                <p>Items you add to your cart will be saved here for you.</p>
                            </div>
                            <div className="cart-left-container--cart-empty"></div>
                        </div>)}
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                </div>
                <div className="cart-right-container">
                    <div className="cart-right-container-header">
                        <p>Summary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}