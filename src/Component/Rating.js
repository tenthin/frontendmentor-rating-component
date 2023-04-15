import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYouPage(true);
  };

  return (
    <div className="rating-container">
      <div className="rating-inner">
        <img
          src="/interactive-rating-component-main/images/icon-star.svg"
          alt=""
        />
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        {/* <div className="rating"> */}
        <ul>
          <li
            className={
              activeRatings.oneStar
                ? "rating_container active"
                : "rating_container"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: true,
                twoStar: false,
                threeStar: false,
                fourStar: false,
                fiveStar: false,
              });
              setRating(1);
            }}
          >
            1
          </li>
          <li
            className={
              activeRatings.twoStar
                ? "rating_container active"
                : "rating_container"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: true,
                threeStar: false,
                fourStar: false,
                fiveStar: false,
              });
              setRating(2);
            }}
          >
            2
          </li>
          <li
            className={
              activeRatings.threeStar
                ? "rating_container active"
                : "rating_container"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: true,
                fourStar: false,
                fiveStar: false,
              });
              setRating(3);
            }}
          >
            3
          </li>
          <li
            className={
              activeRatings.fourStar
                ? "rating_container active"
                : "rating_container"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: false,
                fourStar: true,
                fiveStar: false,
              });
              setRating(4);
            }}
          >
            4
          </li>
          <li
            className={
              activeRatings.fiveStar
                ? "rating_container active"
                : "rating_container"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: false,
                fourStar: false,
                fiveStar: true,
              });
              setRating(5);
            }}
          >
            5
          </li>
        </ul>
        {/* </div> */}
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Rating;
