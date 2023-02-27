import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// import
import Star from "../src/assets/images/icon-star.svg";
import ThankYou from "../src/assets/images/illustration-thank-you.svg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__contentWrapper">
          {/* <div className="card__starWrapper"> */}
          <img src={Star} alt="Star icon" className="card__star" />
          {/* </div> */}
          <h2 className="card__title">How did we do?</h2>
          <p className="card__para">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="card__ratingWrapper">
            <p className="card__ratingItem">1</p>
            <p className="card__ratingItem">2</p>
            <p className="card__ratingItem">3</p>
            <p className="card__ratingItem">4</p>
            <p className="card__ratingItem">5</p>
          </div>
          <div className="card__btnWrapper">
            <a href="#" className="card__btn">
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
