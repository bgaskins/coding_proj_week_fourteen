import React from 'react';
import Movie from './Movie';

// MovieList renders a list of movies from data located in App.js
const MovieList = ({ movies, onAddReview }) => (
  <div className="movie-list">
    {/* Runs through array of movies to render each one  */}
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} onAddReview={onAddReview} />
    ))}
  </div>
);

export default MovieList;