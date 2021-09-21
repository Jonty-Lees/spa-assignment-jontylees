# Tasty Tv SPA

This website is hosted through Netlify at this link:
https://csb-m9shq.netlify.app/

In this project for Tasty TV, I wanted to create an easy and simplistic watch later list, using the tasty TV movie base API people could look through the titles and simply add movies to their list.
Once added to the water later list, users had access to a watch button, a rating system, a movie delte button and could also delete all the watched and entire list.

---

## Technologies

1. html
2. css
3. Javascript
4. React js

---

## User Stories and Wireframe

Below are the embeded images of my user stories which inturn helped insire my wireframes
To see a more graphically detailed version, please look at my [MIRO](https://miro.com/welcomeonboard/T1VkN2NMRXdNTVpOVk1LYU11ZERaQ3JJUk1FUWNqQlcxdFY5UVp3RExheWdyT3BtUVk3ZjFLZ3c5WWpMRWNBd3wzMDc0NDU3MzYwNzMzNjc2MTEz?invite_link_id=566116109447)

### User Stories

The user stories helped shape my design and gave me achivable goals to complete.
These are prioritised with what I would look at first and then would work out how/if I would try to comlete it in this iteration.

![UserStories](https://user-images.githubusercontent.com/86611109/134204104-7f94965d-d9e0-4781-8151-32ed3af5d515.png)


---

### Wireframe

The Wireframing helped get a clear idea and picture of the UI design of the site. Using inspiration from the
user storie, I tried to create something that was easy to use and fit the needs of Tasty TV.

![Wire Frame](https://user-images.githubusercontent.com/86611109/134204120-b95155fe-534b-40d5-a4ac-76fb4d0cced8.png)


---

## Development process and problem-solving strategy

I had originaly started with a slightly different design, instead of ther being two rows, where one is add too from the other. I had planned to have one row, which was populated by the client api, where the user could search in the search bar and add movies.
after implmenting a lot of this, I had a chat to lectuer who didnt believe it to be very practical, so went about changing it and then hit into problems that I hadnt faced.

I was able to create the buttons to delete, delete all and to add from the API to the fairly simply, and found them to be fairly easy to recreate once I created the second row

The rating stars were fun to make. I enjoyed being able to use code like

```
     {[...Array(5)].map((star, i) => {
```

to create multiples of a components.
I really enjoyed being slowly figuring out how to use html commands within React, the way to make the stars change colour when you mount goes over a star was a good example of this

```
 <FaStar
                className="star"
                size={15}
                color={
                  ratingValue <= (hover || watchLater) ? "#079ea3" : "#8a8989"
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
```

understanding how to use the react icons dependenceis and have access to icons was fun!

I enjoyed using the onMouseEnter/Leave to change the hover state & prioritising the hover over watchLater.

I have been really struggling with the watched checkbox and the Delete Watched function. I had set it up with my previous design in a way that when you clicked 'watched', the check box is checked and the state props go from 'watched: false' to 'watched: true' and can toggle back and forth. Then the Delete Watched function .map through the props and returned those that were 'false', see below

```
function deleteWatchedMovies(id) {
    setFavMovie((previousMovies) => {
      return previousMovies.filter((favMovieItem, index) => {
        if (favMovieItem.watched === false) return index !== id;
      });
    });
  }
```

As I said, this worked when one row. when I introduced the second row,'Your Watch Later List', this no longer toggled **unless** I refreshed the page, then it would work as expected. I have, to the point of writing this, beem unable to figure out why.
I have poured in hours of looking at documentation, other examples and previous lectures and cannot figure out how to fix the bug.

---

## Future Iterations and Unsolved Problems

For the Future Here are somethings I would like to add and figure out

---

- Full button functionality
  As I changed the design faily late in the day, it meant the otion for a full reshuffle felt more overwhelming and not doable in the time frame. having every button work like it is meant to is a must!

- using the searchbar to call and external API like OMDB API to populate the list and give a wider array of movies to add to the watch later list

- Edit Order function
  I would like to add the option to edit the order of your watch later list. If I hadnt have had such a struggle, It was going to be a feature i wanted to implement but unfortunatly had to display: none it untill I can have time to implement it.

  - I would like to add a proper login feature
