import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <p>{review.content}</p>
          <small>By {review.user}</small>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;