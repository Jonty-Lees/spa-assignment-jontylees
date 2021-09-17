import React, { useState } from "react";
import uuid from "react-uuid";

function AddMovie(props) {
  const [movie, setMovie] = useState({
    name: "",
    watched: false,
    bannerUrl: "",
    id: uuid()
  });

  function submitMovie(e) {
    props.onAdd(movie);
    setMovie({
      name: "",
      watched: false,
      bannerUrl: "",
      id: uuid()
    });
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie((previousMovies) => {
      return { ...previousMovies, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          name="name"
          value={movie.name}
          watched={movie.watched}
          onChange={handleChange}
          placeholder="Add To Watch List..."
        />
        <button onClick={submitMovie}>ADD</button>
      </form>
    </div>
  );
}

export default AddMovie;
