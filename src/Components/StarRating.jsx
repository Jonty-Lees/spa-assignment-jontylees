import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="starsContainer">
      <p>Your Rating Is : {rating}</p>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="starLabel">
            <input
              type="radio"
              className="starRadio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              size="20"
              color={ratingValue <= (hover || rating) ? "#079ea3" : "#8a8989"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
