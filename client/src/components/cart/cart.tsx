import "../../styles/cart.css";
export default function Cart (){
    let cart = [];

    return (
        <div className="cart-page">
            <div className="cart">
                <div className="cart-left-container">
                        {cart.length > 0? 
                        (<p>Not Empty!</p>) :
                        (<div className="cart-left-container-header">
                            <h2>Cart</h2>
                            <p>Items you add to your cart will be saved here for you.</p>
                        </div>)}
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