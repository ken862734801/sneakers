import "../../styles/offer-card.css";
import nike from "../../images/nike.png";

interface Offer{
    name: String;
    image: string;
    text: String;
};

export default function OfferCard (props: Offer){
    return (
        <div className="offer-card">
            <div className="offer-card-header">
                <div className="offer-card-image-container">
                    <img src={props.image}></img>
                </div>
            </div>
            <div className="offer-card-information-container">
                <p className="offer-card-name">{props.name}</p>
                <p className="offer-card-text">{props.text}</p>
                <div className="offer-card-logo-container">
                    <img src={nike}></img>
                </div>
            </div>
        </div>
    )
};