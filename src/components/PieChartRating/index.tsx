import React, { useEffect, useRef, useState, useMemo, useId } from "react";

const PieChartRating = ({ rating }: { rating: number }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [offset, setOffset] = useState<number>(0);
  const circumference = 2 * Math.PI * 30;
  const uniqueId = useId();

  const calculateOffset = (rating: number) => {
    const progress = rating / 100;
    return circumference * (1 - progress);
  };

  useEffect(() => {
    const dashoffset = calculateOffset(rating);
    if (circleRef.current) {
      circleRef.current.style.transition = "stroke-dashoffset 0.4s ease-in-out";
      circleRef.current.style.strokeDashoffset = `${dashoffset}px`;
    }
    setOffset(dashoffset);
  }, [rating, circumference]);

  const gradientColors = useMemo(() => {
    if (rating >= 0 && rating < 25) {
      return ["#FF5252", "#FF1744"];
    } else if (rating >= 25 && rating < 50) {
      return ["#FFB74D", "#FF9800"];
    } else if (rating >= 50 && rating < 75) {
      return ["#FFEE58", "#FDD835"];
    } else if (rating >= 75 && rating <= 100) {
      return ["#66BB6A", "#43A047"];
    }
    return ["#66BB6A", "#43A047"];
  }, [rating]);

  const gradientId = `progressGradient-${uniqueId}`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOffset(calculateOffset(rating))}
      onMouseLeave={() => setOffset(calculateOffset(rating))}
    >
      <div className="flex items-center justify-center">
        <svg className="transform -rotate-90 w-72 h-72">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <circle
            cx="145"
            cy="145"
            r="30"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            ref={circleRef}
            cx="145"
            cy="145"
            r="30"
            stroke={`url(#${gradientId})`}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-blue-500"
          />
        </svg>
        <span className="absolute text-base font-bold">{`${rating}%`}</span>
      </div>
    </div>
  );
};

export default PieChartRating;
