import Offers from "../../data/offers";
import OfferCard from "./offer-card";
import Reviews from "../../data/reviews.json";
import ReviewCard from "./review-card";
import arrow from "../../images/arrow.png";

import "../../styles/home.css";

export default function Home (){
    return (
        <div className="home">
            <section className="offer-section">
                <h2 className="section-title">What We Offer</h2>
                    <div className="offer-container">
                        {Offers.map((data, index) => {
                            return (<OfferCard key={index} name={data.name} image={data.image} text={data.text}/>)
                        })}
                    </div>
            </section>
            <section className="review-section">
                <h2 className="section-title">What Our Clients Say About Us</h2>
                <div className="review-container">
                    {Reviews.map((data, index) => {
                        return(<ReviewCard key={index} name={data.name} occupation={data.occupation} review={data.review} image={data.image}/>)
                    })}
                </div>
                <div className="pagination-container">
                    <div className="arrow-container">
                        <img className="arrow left" src={arrow}/>
                    </div>
                    <div className="arrow-container">
                        <img className="arrow right" src={arrow}/>
                    </div>
                </div>
            </section>
        </div>
    )
};