import React from "react";
import "./Thankyou.css";

function Thankyou({ rating }) {
  return (
    <div className="thankyou-container">
      <div className="thankyou-img">
        <img
          src="\interactive-rating-component-main\images\illustration-thank-you.svg"
          alt=""
        />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. <br />
        If you ever need more support, don't hesitate to <br />
        get in touch!
      </p>
    </div>
  );
}

export default Thankyou;
