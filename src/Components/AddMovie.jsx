import React, { useState } from "react";
import uuid from "react-uuid";

function AddMovie(props) {
  const [movie, setMovie] = useState({
    title: "",
    completed: false,
    id: uuid()
  });

  function submitMovie(e) {
    props.onAdd(movie);
    setMovie({
      title: "",
      completed: false,
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
          name="title"
          value={movie.title}
          completed={movie.completed}
          onChange={handleChange}
          placeholder="Add To Watch List..."
        />
        <button onClick={submitMovie}>ADD</button>
      </form>
    </div>
  );
}

export default AddMovie;
