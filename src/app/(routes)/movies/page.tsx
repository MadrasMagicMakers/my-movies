"use client";
import React from "react";
import Header from "@/components/Header";
import PopularMovies from "@/components/MovieTypes/PopularMovies";
import TrendingMovies from "@/components/MovieTypes/TrendingMovies";
import UpcomingMovies from "@/components/MovieTypes/UpcomingMovies";
import TopRatedMovies from "@/components/MovieTypes/TopRatedMovies";

const Movies = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center p-8"
      style={{
        backgroundImage:
          "url('https://images5.alphacoders.com/135/thumbbig-1355115.webp')",
      }}
    >
      <div className="container">
        <div className="bg-glass rounded p-4">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Movies;
