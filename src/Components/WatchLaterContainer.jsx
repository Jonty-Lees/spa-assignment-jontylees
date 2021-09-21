import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function WatchLaterContainer(props) {
  const [watchLater, setWatchLater] = useState({
    name: "",
    img: "",
    watched: false,
    id: "",
    rating: ""
  });
  const [hover, setHover] = useState(null);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }

  function changeRating() {
    props.onRating(props.id);
  }

  return (
    <div className="movieContainer">
      <img src={props.img} alt={`the movie poster of ${props.name}`} />

      <h2>{props.name}</h2>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>

      <div className="starRatingContainer">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label className="starRatingContainer">
              <input
                type="radio"
                className="starRadio"
                value={watchLater.rating}
                // I Think this needs to go back to app and then render a function that sets to state
                onClick={() => setWatchLater(ratingValue)}
                onChange={changeRating}
              />
              <FaStar
                className="star"
                size={15}
                color={
                  ratingValue <= (hover || watchLater) ? "#079ea3" : "#8a8989"
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        {/* <p>Your Rating: {movie.rating}</p> */}
      </div>

      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default WatchLaterContainer;

// const { watched, setWatched } = useState({
//   title: "",
//   img: "",
//   starRating: "",
//   watched: false
// });

// function checkBoxChange(event) {
//   props.onWatched(watched);
//   setWatched({
//     title: "",
//     img: "",
//     starRating: "",
//     watched: false
//   });
// }
