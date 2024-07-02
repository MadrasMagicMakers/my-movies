"use client";
import React from "react";

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star filled text-yellow-500 animate-pulse">
          ★
        </span>
      ))}
      {halfStar && (
        <span className="star half-filled text-yellow-500 animate-pulse">
          ☆
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty text-yellow-500 animate-pulse">
          ☆
        </span>
      ))}
    </div>
  );
};

export default StarRating;
