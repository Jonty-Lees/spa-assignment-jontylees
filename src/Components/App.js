/* eslint-disable */

import React, { useState, useEffect } from "react";
import "../styles.css";
import AddMovie from "./AddMovie";
import MovieContainer from "./MovieContainer";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import uuid from "react-uuid";

export default function App() {
  const [movie, setMovie] = useState([]);

  // ONLY UNCOMMENT BELOW LINE IF YOU WANT TO RESET THE LOCALSTORAGE (ONLY USED FOR TEST)
  // localStorage.removeItem("tasty-tv-app");

  useEffect(() => {
    const data = localStorage.getItem("tasty-tv-app");
    if (data) {
      setMovie(JSON.parse(data));
    } else {
      clientAPI();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasty-tv-app", JSON.stringify(movie));
  });

  const clientAPI = async () => {
    const url = "https://hub.dummyapis.com/vj/wzGUkpZ";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovie(responseJson);
  };

  const ID = uuid();

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
        movieItem.watched = !movieItem.watched;
      }
      return movieItem;
    });
    setMovie(updatedList);
  }

  function deleteWatchedMovies(id) {
    setMovie((previousMovies) => {
      return previousMovies.filter((movieItem, index) => {
        if (movieItem.watched === false) return index !== id;
      });
    });
  }

  // function setRating(id) {
  //   const updatedList = [...movie].map((movieItem, index) => {
  //     if (id === movieItem.id) {
  //       onRating(movieItem.rating);
  //     }
  //     return movieItem;
  //   });
  //   setMovie(updatedList);
  // }

  // function imgChoice(id) {
  //   setMovie((previousMovie) => {
  //     return previousMovie.map((movieItem, index) => {
  //       if (movieItem.bannerUrl !== undefined) {
  //         return movieItem.bannerUrl;
  //       } else {
  //         return { display: null };
  //       }
  //     });
  //   });
  // }
  // Try useEffect to show movieItem.bannerUrl unless 'undefined', then call either api or random picture
  useEffect(() => {}, []);

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
              onDelete={deleteMovie}
              onWatched={watchedComplete}
              watched={movieItem.watched}
              onKeyID={movieItem.id}
              // onRating={setRating}
            />
          );
        })}
      </div>
      <h2>Your Watch Later List</h2>
      <div className="movieContainerBox">
        {movie.map((movieItem, index) => {
          return (
            <MovieContainer
              key={movieItem.id}
              id={movieItem.id}
              name={movieItem.name}
              img={movieItem.bannerUrl}
              onDelete={deleteMovie}
              onWatched={watchedComplete}
              watched={movieItem.watched}
              onKeyID={movieItem.id}
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
