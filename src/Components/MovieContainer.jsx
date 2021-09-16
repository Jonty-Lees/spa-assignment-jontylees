import React from "react";

function MovieContainer(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function checkBoxChange() {
    props.onWatched(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  function editingText() {
    props.textEdit(props.id);
  }

  return (
    <div className="movieContainer">
      <img src="https://picsum.photos/175/250" alt="" />

      <h2>{props.title}</h2>

      <input type="text" onChange={editingText} />

      <p>Released: 29/01/1991</p>
      <button className="button-watched">
        Watched
        <input type="checkbox" className="checkbox" onChange={checkBoxChange} />
      </button>

      <div></div>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="button-edit" oncClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}

export default MovieContainer;
// checkBoxChange
