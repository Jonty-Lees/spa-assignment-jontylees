import React from "react";

function MovieContainer(props) {
  function handleFavourites() {
    props.onFavourite(props);
  }

  return (
    <div className="movieContainer">
      <img src={props.img} alt={`the movie poster of ${props.name}`} />

      <h2>{props.name}</h2>
      <button className="button-favourites" onClick={handleFavourites}>
        Add To <br />
        Watch Later
      </button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
// https://picsum.photos/175/250
