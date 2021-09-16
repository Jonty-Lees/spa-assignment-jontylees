import React from "react";

function Buttons(props) {
  function handleDeleteAll() {
    props.onDeleteAll(props.id);
  }

  function handleDeleteWatched() {
    props.onDeleteWatched(props.id);
  }

  return (
    <div className="page-buttons">
      <p>
        <button className="EditOrderButton">Edit Order</button>
      </p>
      <button className="DeleteAllButton" onClick={handleDeleteAll}>
        Delete All
      </button>
      <button className="DeleteWatchedButton" onClick={handleDeleteWatched}>
        Delete Watched
      </button>
    </div>
  );
}

export default Buttons;
