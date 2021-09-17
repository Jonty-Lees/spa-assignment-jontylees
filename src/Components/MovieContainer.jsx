import React, { useState } from "react";
import StarRating from "./StarRating";

function MovieContainer(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }

  function keyId() {
    props.onKeyID(props.id);
  }

  return (
    <div className="movieContainer">
      <img src="" alt="" />

      <h2>{props.name}</h2>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>
      <StarRating key={keyId} />
      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
// https://picsum.photos/175/250
