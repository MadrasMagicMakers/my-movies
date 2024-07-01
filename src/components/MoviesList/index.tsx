"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import RightArrow from "../../../public/images/svg/RightArrow";
import LeftArrow from "../../../public/images/svg/LeftArrow";
import PieChartRating from "../PieChartRating";
import { Movie, MovieListProps } from "@/types";

const MovieList: React.FC<MovieListProps> = ({
  title,
  movies,
  currentPage,
  totalPages,
  totalCount,
  moviesPerPage = 5,
  handleNext,
  handlePrevious,
}) => {
  const router = useRouter();

  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const selectedMovies: Movie[] = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * moviesPerPage;
    return movies.slice(startIndex, startIndex + moviesPerPage);
  }, [movies, moviesPerPage, safeCurrentPage]);

  const handleRedirection = (id: number) => router.push(`/movies/${id}`);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="inline-flex space-x-8">
            {selectedMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-transform duration-300 hover:scale-90 cursor-pointer"
                style={{ width: "200px", flexShrink: 0 }}
                onClick={() => handleRedirection(movie.id)}
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                    style={{ transform: "scale(1)" }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 backdrop-blur-lg p-4 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-white">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-white">
                      Genre: {movie.genre.join(", ")}
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PieChartRating rating={movie.rating * 10} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center ml-4">
          <div
            onClick={handlePrevious}
            className={`p-2 rounded-full bg-gray-300 ${
              safeCurrentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <RightArrow />
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center mr-4">
          <div
            onClick={handleNext}
            className={`p-2 rounded-full bg-gray-300 ${
              safeCurrentPage === totalPages || totalPages === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <LeftArrow />
          </div>
        </div>
      </div>
      {/* <p className="text-center mt-4 text-sm text-gray-500">
        Showing {selectedMovies.length} of {totalCount} movies
      </p> */}
    </div>
  );
};

export default MovieList;
