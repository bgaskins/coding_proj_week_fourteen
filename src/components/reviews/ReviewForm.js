import React, { useState } from 'react';
import Stars from '../stars/Stars';

const ReviewForm = ({ onAddReview }) => {
  // The state for new review text and a star rating
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  // Event handler for changing the review text
  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  // Event handler for changing the review rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Event handler for submitting the review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    onAddReview({ text: newReview, rating: rating });
    // Reset the review text and rating to previous state
    setNewReview('');
    setRating(0);
  };

  return (
    <form onSubmit={handleReviewSubmit}>
      <textarea
        placeholder="Write your review here..."
        value={newReview}
        onChange={handleReviewChange} 
      ></textarea>
      {/* Render the Stars component with the current rating */}
      <Stars rating={rating} onRatingChange={handleRatingChange} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;