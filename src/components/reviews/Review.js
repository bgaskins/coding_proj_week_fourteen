import React from 'react';
import Stars from '../stars/Stars'; 

// Displays review cards with stars based on the user's chosen rating and the review text
const Review = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-table">
        <Stars rating={review.rating} />  {/* User's review rating */}
        <div className="review-text">{review.text}</div> {/* User's review text*/}
      </div>
    </div>
  );
};

export default Review;
