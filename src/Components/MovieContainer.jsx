import React, { useState } from "react";
import StarRating from "./StarRating";

function MovieContainer(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }

  return (
    <div className="movieContainer">
      <img src="https://picsum.photos/175/250" alt="" />

      <h2>{props.title}</h2>

      <p>Released: 29/01/1991</p>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>
      <StarRating />
      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
