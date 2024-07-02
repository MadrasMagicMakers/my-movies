"use client";
import React, { useState } from "react";
import MovieList from "../../MoviesList";
import { sampleMovies } from "@/constants";

const TopRatedMovies = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(5);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalPages = Math.ceil(sampleMovies.length / moviesPerPage);
  const totalCount = sampleMovies.length;

  return (
    <MovieList
      title="Top Rated Movies"
      movies={sampleMovies}
      currentPage={currentPage}
      totalPages={totalPages}
      totalCount={totalCount}
      moviesPerPage={moviesPerPage}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  );
};

export default TopRatedMovies;
