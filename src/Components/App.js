import React, { useState } from "react";
import "../styles.css";
import AddMovie from "./AddMovie";
import MovieContainer from "./MovieContainer";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import uuid from "react-uuid";

export default function App() {
  const [movie, setMovie] = useState([]);

  function addMovies(newMovie) {
    setMovie((previousMovies) => {
      return [...previousMovies, newMovie];
    });
  }

  function deleteMovie(id) {
    setMovie((previousMovies) => {
      return previousMovies.filter((movieItem, index) => {
        return movieItem.id !== id;
      });
    });
  }

  function deleteAllMovies() {
    setMovie([]);
  }

  function watchedComplete(id) {
    const updatedList = [...movie].map((movieItem, index) => {
      if (id === movieItem.id) {
        movieItem.completed = !movieItem.completed;
      }
      return movieItem;
    });
    setMovie(updatedList);
  }

  function deleteWatchedMovies(id) {
    setMovie((previousMovies) => {
      return previousMovies.filter((movieItem, index) => {
        if (movieItem.completed === false) return index !== id;
      });
    });
  }

  const ID = uuid();

  return (
    <div className="App">
      <Header />
      <AddMovie onAdd={addMovies} />
      {movie.map((movieItem, index) => {
        return (
          <MovieContainer
            key={movieItem.id}
            id={movieItem.id}
            title={movieItem.title}
            onDelete={deleteMovie}
            onWatched={watchedComplete}
            completed={movieItem.completed}
          />
        );
      })}
      {movie.map((movieItem) => {
        return (
          <Buttons
            key={movieItem.id}
            id={ID}
            onDeleteAll={deleteAllMovies}
            onDeleteWatched={deleteWatchedMovies}
          />
        );
      })}
      <Footer />
    </div>
  );
}

// Add- done

// Delete - done

// Delete All -done

// Edit

//  Watched

// Delete Watched

// My Approch...
//  Create UserStories and WireFrame
//  Work out the components
//  Work out what states/ props i need to use and how to store and keep track of them
//  Pathways to pass props
//  How to render the arrays using the props
//  implement ID's
//  Focusing on my order of Add, Delete, Delete All, Edit, Watched, Delete Watched
//  Update CSS
//  Fetch Client API to populate the initial list
//  Look at storing data locally
// Look at extra features
//
