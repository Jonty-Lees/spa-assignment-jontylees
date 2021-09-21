/* eslint-disable */

import React, { useState, useEffect } from "react";
import "../styles.css";
import AddMovie from "./AddMovie";
import MovieContainer from "./MovieContainer";
import WatchLaterContainer from "./WatchLaterContainer";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import uuid from "react-uuid";
import { propTypes } from "react-bootstrap/esm/Image";

export default function App() {
  const [movie, setMovie] = useState([]);
  const [favMovie, setFavMovie] = useState([]);

  // ONLY UNCOMMENT BELOW LINE IF YOU WANT TO RESET THE LOCALSTORAGE (ONLY USED FOR TEST)
  // localStorage.removeItem("tasty-tv-app");

  // USEEFFECT TO STORE TO LOCAL STORAGE

  useEffect(() => {
    const data = localStorage.getItem("tasty-tv-app");
    if (data) {
      setFavMovie(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasty-tv-app", JSON.stringify(favMovie));
  });

  // CALL THE CLIENT API

  const clientAPI = async () => {
    const url = "https://hub.dummyapis.com/vj/wzGUkpZ";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovie(responseJson);
  };

  useEffect(() => {
    clientAPI();
  }, []);

  // TO CREATE A UNIQUE ID IF NEEDED

  const ID = uuid();

  // ADDING MOVIES

  function addMovies(newMovie) {
    setMovie((previousMovies) => {
      return [...previousMovies, newMovie];
    });
  }

  // ADDING TO WATCH LIST

  const addFavMovie = (movie) => {
    const favouriteList = [...favMovie, movie];
    setFavMovie(favouriteList);
  };

  // DELETING MOVIES FROM WATCH LIST

  function deleteMovie(id) {
    setFavMovie((previousMovies) => {
      return previousMovies.filter((favMovieItem, index) => {
        return favMovieItem.id !== id;
      });
    });
  }

  // DELETEING ALL MOVIES FROM WATCH LIST

  function deleteAllMovies() {
    setFavMovie([]);
  }

  // FUNCTION FOR THE CHECKBOX TO CONTROL THE STATE OF WATCHED

  function watchedComplete(id) {
    const updatedList = [...favMovie].map((favMovieItem, index) => {
      if (id === favMovieItem.id) {
        // favMovieItem.watched = !favMovieItem.watched;
        if (favMovieItem.watched === true) {
          favMovieItem.watched = false;
        } else {
          favMovieItem.watched = true;
        }
      }
      return favMovieItem;
    });
    setFavMovie(updatedList);
  }

  // FUNCTION TO DELETE ALL WATCHED

  function deleteWatchedMovies(id) {
    setFavMovie((previousMovies) => {
      return previousMovies.filter((favMovieItem, index) => {
        if (favMovieItem.watched === false) return index !== id;
      });
    });
  }

  function setRating() {}

  return (
    <div className="App">
      <Header />
      <AddMovie onAdd={addMovies} />
      <h2 className="h2Title">Search Here</h2>
      <div className="movieContainerBox">
        {movie.map((movieItem, index) => {
          return (
            <MovieContainer
              key={movieItem.id}
              id={movieItem.id}
              name={movieItem.name}
              img={movieItem.bannerUrl}
              onKeyID={movieItem.id}
              onFavourite={addFavMovie}
            />
          );
        })}
      </div>
      <h2 className="h2Title">Watch Later List</h2>
      <div className="movieContainerBox">
        {favMovie.map((favMovieItem, index) => {
          return (
            <WatchLaterContainer
              key={favMovieItem.id}
              id={favMovieItem.id}
              name={favMovieItem.name}
              img={favMovieItem.img}
              onDelete={deleteMovie}
              onWatched={watchedComplete}
              watched={favMovieItem.watched}
              onKeyID={favMovieItem.id}
              onRating={setRating}
            />
          );
        })}
      </div>

      {favMovie.map((movieItem) => {
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
