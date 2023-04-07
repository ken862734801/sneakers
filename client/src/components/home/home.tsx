import React, { useState, useEffect } from "react";
import Offers from "../../data/offers";
import OfferCard from "./offer-card";
import Reviews from "../../data/reviews.json";
import ReviewCard from "./review-card";
import Arrow from "../../images/arrow.png";
import CircleArrow from "../../images/circle-arrow.png";
import Widget from "./widget";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MainImage from "../../images/main-image.png";

import "../../styles/home.css";

export default function Home() {

  const breakpoints = {
    1028: {
      perPage: 1,
    }, 
    768:{
      perPage: 1
    }
  };

  const options = {
    gap:30,
    perPage: 2,
    breakpoints,
  };
  

  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(3);
  const [currentCategory, setCurrentCategory] = useState("Men");

  function handleCategoryChange(category: string){
    setCurrentCategory(category);
  }

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
        <div className="hero-section-container">
            <div className="hero-section-left-container">
              <h1>Summer</h1>
              <h1>Collections</h1>
              <h1 className="orange">2022</h1>
              <p>Find your shoes from our various collections.
                Here shoes are endless and customers are happy.
              </p>
              <div className="button-container">
                <button>Shop Now <span><img src={CircleArrow}></img></span></button>
              </div>
              {/* <div className="widget-container">
                <Splide options={options} aria-label="featured products" className="widget-splide">
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                  <SplideSlide>
                    <Widget/>
                  </SplideSlide>
                </Splide>
              </div> */}
            </div>
            <div className="hero-section-right-container">
              <div className="main-image-background">
                {/* <h1>NIKE</h1>
                <div className="ribbon"></div>
                <div className="main-image-container">
                  <img src={MainImage}/>
                </div>
                <div className="main-image-text"></div> */}
              </div>
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
      <section className="collection-section">
        <h2 className="section-title">Our <span className="orange"> Collection</span></h2>
        <nav className="collection-nav">
          <li className={currentCategory === "Men" ? "active" : ""} onClick={()=> handleCategoryChange("Men")}>Men</li>
          <li className={currentCategory === "Women" ? "active" : ""} onClick={()=> handleCategoryChange("Women")}>Women</li>
          <li className={currentCategory === "Kids" ? "active" : ""} onClick={()=> handleCategoryChange("Kids")}>Kids</li>
        </nav>
        <div className="pagination-container">
          <div className="arrow-container">
            <img className="arrow left" src={Arrow}></img>
          </div>
          <div className="arrow-container">
            <img className="arrow right" src={Arrow}></img>
          </div>
        </div>
        <div className="collection-container"></div>
      </section>
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
