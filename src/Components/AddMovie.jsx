import React, { useState } from "react";
import uuid from "react-uuid";

function AddMovie(props) {
  const [favMovie, setFavMovie] = useState({
    name: "",
    watched: false,
    bannerUrl: "",
    id: uuid()
  });

  function submitMovie(e) {
    props.onAdd(favMovie);
    setFavMovie({
      name: "",
      watched: false,
      bannerUrl: "",
      id: uuid()
    });
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFavMovie((previousMovies) => {
      return { ...previousMovies, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          name="name"
          value={favMovie.name}
          watched={favMovie.watched}
          onChange={handleChange}
          placeholder="Add To Watch List..."
        />
        <button onClick={submitMovie}>ADD</button>
      </form>
    </div>
  );
}

export default AddMovie;
