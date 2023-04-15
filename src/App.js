import { useState } from "react";
import "./App.css";
import Rating from "./Component/Rating";
import Thankyou from "./Component/Thankyou";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div className="App">
      {showThankYouPage ? (
        <Thankyou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
      {/* <Rating /> */}
      {/* <Thankyou /> */}
    </div>
  );
}

export default App;
