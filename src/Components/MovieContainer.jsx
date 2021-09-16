import React from "react";

function MovieContainer(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }
  console.log(props.id);

  return (
    <div className="movieContainer">
      <img src="https://picsum.photos/175/250" alt="" />
      <h2>{props.title}</h2>
      <p>Released: 29/01/1991</p>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>

      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="button-edit">Edit</button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
