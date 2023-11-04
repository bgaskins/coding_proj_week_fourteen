import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        // Render the Review component for each review in the list
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;