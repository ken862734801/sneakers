import React, { useState, useEffect } from "react";
import Offers from "../../data/offers";
import OfferCard from "./offer-card";
import Reviews from "../../data/reviews.json";
import ReviewCard from "./review-card";
import Arrow from "../../images/arrow.png";
import CircleArrow from "../../images/circle-arrow.png";
import Widget from "./widget";
import { Product } from "../common/types";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "../../styles/home.css";

export default function Home() {

  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(3);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/products")
  //     .then(response => response.json())
  //     .then(data => setFeaturedProducts(data));
  // }, []);


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
  
  const isNextArrowDisabled = currentReviewPage === Math.ceil(Reviews.length / numReviewsDisplayed) - 1;

  function renderReviewCards() {
    const startIndex = currentReviewPage * numReviewsDisplayed;
    const endIndex = startIndex + numReviewsDisplayed;
    return Reviews.slice(startIndex, endIndex).map((review, index) => (
      <ReviewCard key={index} name={review.name} occupation={review.occupation} review={review.review} image={review.image} />
    ))
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
              <div className="widget-container">
                <Widget/>
                {/* <Splide aria-label="My Favorite Images">
                  <SplideSlide>
                    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png" alt="Image 1"/>
                  </SplideSlide>
                  <SplideSlide>
                    <img src={Arrow} alt="Image 2"/>
                  </SplideSlide>
                </Splide> */}
              </div>
            </div>
            <div className="hero-section-right-container"></div>
          </div>
        </div>
      </section>
      <div className="hero-section-footer">
        <div className="hero-section-footer-container">
          <li><span className="number orange">20k +</span> Orders Completed</li>
          <li><span className="number orange">20k +</span> Consistent Visitors</li>
          <li><span className="number orange">20k +</span> Happy Customers</li>
        </div>
      </div>
      <section className="offer-section">
        <h2 className="section-title">What We <span className="orange">Offer</span></h2>
        <div className="offer-container">
          {Offers.map((data, index) => {
            return <OfferCard key={index} name={data.name} image={data.image} text={data.text} />;
          })}
        </div>
      </section>
      <section className="new-arrivals-section"></section>
      <section className="review-section">
        <h2 className="section-title">What Our <span className="orange">Clients Say</span> About Us</h2>
        <div className="review-container">{renderReviewCards()}</div>
        <div className="pagination-container">
        <div className="arrow-container">
          <img
            className={`arrow left ${currentReviewPage === 0 ? 'disabled' : ''}`}
            src={Arrow}
            onClick={handlePrevReviewClick}
          />
        </div>
        <div className="arrow-container">
          <img
            className={`arrow right ${isNextArrowDisabled ? 'disabled' : ''}`}
            src={Arrow}
            onClick={handleNextReviewClick}
          />
        </div>
      </div>
      </section>
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Join Our <span className="orange">News Letters</span></h2>
          <p className="newsletter-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum ratione dolore molestiae? 
            Repellat iste sequi quis ullam natus nisi dolorem.</p>
            <div className="newsletter-input-container">
              <input placeholder="Enter your email here..."></input>
              <button className="submit-button">
                <img src={CircleArrow}></img>
              </button>
            </div>
        </div>
      </section>
    </div>
  );
}
