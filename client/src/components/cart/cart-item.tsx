import "../../styles/cart-item.css";
export default function CartItem(){
    return (
        <div className="cart-item">
            <div className="cart-item-container">
                <div className="cart-item-left-container">
                    <div className="cart-item-image-container">
                        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4b2f5e8a-8638-4fa5-81fa-e714024efb39/tech-hera-womens-shoes-NjvkxR.png"></img>
                    </div>
                </div>
                <div className="cart-item-right-container">
                    <div className="cart-item-text-container">
                        <div className="cart-item-header">
                            <p className="cart-item-name">Nike Tech Hera</p>
                            <p className="cart-item-price">$100</p>
                        </div>
                        <p className="cart-item-sku"><span className="cart-item-sku--span">Sku:</span> DH3392-010</p>
                        <p className="cart-item-style"><span className="cart-item-style--span">Style:</span> Women's Shoes</p>
                        <div className="cart-item-size-row">
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
                        <p className="cart-item-shipping"> <span className="cart-item-shipping--span">Estimated Delivery Date:</span> Arrives by Mon, May 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}