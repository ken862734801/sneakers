import React, { useState, useEffect } from "react";
import Offers from "../../data/offers";
import OfferCard from "./offer-card";
import Reviews from "../../data/reviews.json";
import ReviewCard from "./review-card";
import arrow from "../../images/arrow.png";

import "../../styles/home.css";

interface Review {
  name: string;
  occupation: string;
  review: string;
  image: string;
}

export default function Home() {
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(3);

  useEffect(() => {
    function updateNumReviewsDisplayed() {
      if (window.innerWidth <= 768) {
        setNumReviewsDisplayed(1);
      } else {
        setNumReviewsDisplayed(3);
      }
    }

    updateNumReviewsDisplayed();

    window.addEventListener("resize", updateNumReviewsDisplayed);

    return () => {
      window.removeEventListener("resize", updateNumReviewsDisplayed);
    };
  }, []);

  function handlePrevReviewClick() {
    if (currentReviewPage > 0) {
      setCurrentReviewPage(currentReviewPage - 1);
    }
  }

  function handleNextReviewClick() {
    if (currentReviewPage < Math.ceil(Reviews.length / numReviewsDisplayed) - 1) {
      setCurrentReviewPage(currentReviewPage + 1);
    }
  }

  function renderReviewCards() {
    const startIndex = currentReviewPage * numReviewsDisplayed;
    const endIndex = startIndex + numReviewsDisplayed;
    return Reviews.slice(startIndex, endIndex).map((review: Review, index: number) => (
      <ReviewCard key={index} name={review.name} occupation={review.occupation} review={review.review} image={review.image} />
    ));
  }

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-section-body">
          <div className="hero-section-body-container">
            <div className="hero-section-left-container">
              <h1>Summer</h1>
              <h1>Collections</h1>
              <h2>2023</h2>
              <p>Find your shoes from our various collections.
                Here shoes are endless and customers are happy.
              </p>
              <div className="button-container">
                <button>Shop Now <span></span></button>
              </div>
            </div>
            <div className="hero-section-right-container"></div>
          </div>
        </div>
      </section>
      <div className="hero-section-footer">
        <div className="hero-section-footer-container">
          <li><span>20k +</span> Orders Completed</li>
          <li><span>40k +</span> Regular Visitors</li>
          <li><span>15k +</span> Happy Customers</li>
        </div>
      </div>
      <section className="offer-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="offer-container">
          {Offers.map((data, index) => {
            return <OfferCard key={index} name={data.name} image={data.image} text={data.text} />;
          })}
        </div>
      </section>
      <section className="review-section">
        <h2 className="section-title">What Our Clients Say About Us</h2>
        <div className="review-container">{renderReviewCards()}</div>
        <div className="pagination-container">
          <div className="arrow-container">
            <img className="arrow left" src={arrow} onClick={handlePrevReviewClick} />
          </div>
          <div className="arrow-container">
            <img className="arrow right" src={arrow} onClick={handleNextReviewClick} />
          </div>
        </div>
      </section>
      <section>
        <div className="newsletter-container">
          <h2>Join Our Newsletter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit voluptatum ratione dolore molestiae? 
            Repellat iste sequi quis ullam, natus nisi,dolorem eum odio doloribus labore!</p>
            <div>
              <input></input>
              <button></button>
            </div>
        </div>
      </section>
    </div>
  );
}
