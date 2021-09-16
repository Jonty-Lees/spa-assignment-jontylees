import React from "react";
import { FaStar } from "react-icons/fa";

function MovieContainer(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }

  const StarRating = () => {};

  return (
    <div className="movieContainer">
      <img src="https://picsum.photos/175/250" alt="" />

      <h2>{props.title}</h2>

      <p>Released: 29/01/1991</p>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>

      <div>
        {[...Array(5)].map((star) => {
          return (
            <label>
              <input type="radio" className="starRadio" />
              <FaStar className="StarRating" />
            </label>
          );
        })}
      </div>

      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
