import React from "react";
import "./Rating.css";

function Rating() {
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
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}

export default Rating;
