import React, { useState, useEffect } from 'react';
import Stars from '../stars/Stars';
import ReviewList from '../reviews/ReviewList';
import ReviewForm from '../reviews/ReviewForm';

const Movie = ({ movie }) => {
  // Manages the average rating of the movie
  const [averageRating, setAverageRating] = useState(0);

  // Controls the review form and when it is shown
  const [showForm, setShowForm] = useState(false);

  // Manages the list of reviews 
  const [reviews, setReviews] = useState(movie.reviews);

  // Stores the user's rating when adding a new review
  const [userRating, setUserRating] = useState(0);
 
  // Use effect calculates the average rating as the reviews change
  useEffect(() => {
    const totalRating = reviews.reduce((total, review) => total + review.rating, 0);
    const avgRating = totalRating / reviews.length || 0;
    setAverageRating(avgRating);
  }, [reviews]);

  // Function to handle adding a new review to the list
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      {/* Displays the average rating without user interaction */}
      <Stars rating={averageRating} onRatingChange={() => {}} />

      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      
      {/* List of reviews for the movie */}
      <ReviewList reviews={reviews} />
      {showForm ? (
        // ReviewForm component to add a new review
        <ReviewForm
          onAddReview={(review) => {
            handleAddReview(review);
            setShowForm(false);
          }}
          userRating={userRating}
          setUserRating={setUserRating}
        />
      ) : (
        // Button for the Review Form
        <button onClick={() => setShowForm(true)}>Add Review</button>
      )}
    </div>
  );
};

export default Movie;





