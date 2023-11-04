import React from 'react';
import MovieList from './components/movies/MovieList'; // Import the MovieList component
import './App.css'; // Import the CSS styles

function App() {
  // Movie data. Initializes the ratings at 0, and an empty reviews array
  const movies = [
    {
      id: 1,
      title: 'Barbie',
      image: './images/barbie.jpg',
      synopsis: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      rating: 0, //Initialized rating
      reviews: [],  //Initialized reviews array
    },
    {
      id: 2,
      title: 'Cocaine Bear',
      image: './images/cocainebear.jpg',
      synopsis: 'A 227kg black bear consumes a significant amount of cocaine and embarks on a drug-fuelled rampage through a Georgia forest, endangering the lives of cops, criminals, tourists and teenagers.',
      rating: 0, 
      reviews: [], 
    },
    
  ];

  //Render the MovieList component with Header and Footer
  return (
<div className="App">
      <header>
        <h1>Movie Reviewer App</h1>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
      <footer className="App-footer">
        &copy; 2023 Movie Reviewer App
      </footer>
    </div>
  );
}

export default App;