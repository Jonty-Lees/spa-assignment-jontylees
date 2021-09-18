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

export default function App() {
  const [movie, setMovie] = useState([]);
  const [favMovie, setFavMovie] = useState([]);

  // ONLY UNCOMMENT BELOW LINE IF YOU WANT TO RESET THE LOCALSTORAGE (ONLY USED FOR TEST)
  // localStorage.removeItem("tasty-tv-app");

  useEffect(() => {
    const data = localStorage.getItem("tasty-tv-app");
    if (data) {
      setFavMovie(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasty-tv-app", JSON.stringify(favMovie));
  });

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

  const ID = uuid();

  function addMovies(newMovie) {
    setMovie((previousMovies) => {
      return [...previousMovies, newMovie];
    });
  }

  const addFavMovie = (movie) => {
    const favouriteList = [...favMovie, movie];
    setFavMovie(favouriteList);
  };

  function deleteMovie(id) {
    setFavMovie((previousMovies) => {
      return previousMovies.filter((favMovieItem, index) => {
        return favMovieItem.id !== id;
      });
    });
  }

  function deleteAllMovies() {
    setFavMovie([]);
  }

  function watchedComplete(id) {
    const updatedList = [...movie].map((favMovieItem, index) => {
      if (id === favMovieItem.id) {
        favMovieItem.watched = !favMovieItem.watched;
      }
      return favMovieItem;
    });
    setFavMovie(updatedList);
  }

  function deleteWatchedMovies(id) {
    setFavMovie((previousMovies) => {
      return previousMovies.filter((favMovieItem, index) => {
        if (favMovieItem.watched === false) return index !== id;
      });
    });
  }

  // useEffect(
  //   (props) => {
  //     const updatedList = [...movies].map((favMovieItem) => {
  //       if (id === favMovieItem.id) {
  //         return movie.id !== id;
  //       }
  //       return updatedList;
  //     });
  //     setMovie(updatedList);
  //   },
  //   [addFavMovie]
  // );

  return (
    <div className="App">
      <Header />
      <AddMovie onAdd={addMovies} />
      <h2>Search Here</h2>
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
              // onRating={setRating}
            />
          );
        })}
      </div>
      <h2>Your Watch Later List</h2>
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
              // onRating={setRating}
            />
          );
        })}
      </div>
      ;
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
