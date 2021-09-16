import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((starValue, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input type="radio" className="starRadio" value={ratingValue} />
            <FaStar className="star" />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
