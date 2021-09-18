import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const [movie, setMovie] = useState({});
  const [hover, setHover] = useState(null);

  return (
    <div className="starRatingContainer">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="starRatingContainer">
            <input
              type="radio"
              className="starRadio"
              value={ratingValue}
              // I Think this needs to go back to app and then render a function that sets to state
              onClick={() => setMovie(ratingValue)}
            />
            <FaStar
              className="star"
              size={15}
              color={ratingValue <= (hover || movie) ? "#079ea3" : "#8a8989"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {/* <p>Your Rating: {movie.rating}</p> */}
    </div>
  );
};

export default StarRating;
