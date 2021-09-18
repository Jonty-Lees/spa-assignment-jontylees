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
  const [movie, setMovie] = useState([
    {
      id: 269,
      name: "Sarai",
      releasedOn: "20/05/2051",
      watched: false,
      bannerUrl:
        "https://hub.dummyapis.com/Image?text=Item&height=120&width=120"
    }
  ]);

  // localStorage.removeItem("tasty-tv-app-list");

  // useEffect(() => {
  //   const data = localStorage.getItem("tasty-tv-app-list");
  //   if (data) {
  //     setMovie(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasty-tv-app-list", JSON.stringify(movie));
  // });

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

  return (
    <div className="App">
      <Header />
      <AddMovie onAdd={addMovies} />
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
              rating={movieItem.rating}
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
