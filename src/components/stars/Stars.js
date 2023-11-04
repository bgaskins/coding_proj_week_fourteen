import React from 'react';

// Stars component to display and interact with star ratings
const Stars = ({ rating, onRatingChange }) => {
  const starIcons = [1, 2, 3, 4, 5]; // Ratings out of ive stars 

  return (
    <div className="stars">
      {starIcons.map((star) => (
        <span
          key={star}
          /* If the star's value selected is at or below the '5 star rating', 
            it's a filled star; otherwise, it's an empty star. 
 
           If the user rates a movie with 3 stars, and the movie's max rating is 5, 
            the first three stars will be filled, and the last two will be empty */
          className={`star ${star <= rating ? 'star-filled' : 'star-empty'}`}
          // When you click on a star, it triggers the 'onRatingChange' function with the value of that star.
          onClick={() => onRatingChange(star)}
        >
          &#9733; {/* Render a star icon using HTML */}
        </span> 
      ))}
    </div>
  );
};

export default Stars;