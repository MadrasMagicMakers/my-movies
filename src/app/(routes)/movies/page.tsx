"use client";
import React from "react";
import Header from "@/components/Header";
import PopularMovies from "@/components/MovieTypes/PopularMovies";
import TrendingMovies from "@/components/MovieTypes/TrendingMovies";
import UpcomingMovies from "@/components/MovieTypes/UpcomingMovies";
import TopRatedMovies from "@/components/MovieTypes/TopRatedMovies";

const Movies = () => {
  return (
    <div className="min-h-screen w-full p-8 flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center filter blur-lg z-0"
        style={{
          backgroundImage:
            "url('https://images5.alphacoders.com/135/thumbbig-1355115.webp')",
        }}
      ></div>
      <div className="container h-[90vh] relative z-10">
        <div className="bg-glass rounded-5 p-4 h-full flex flex-col">
          <Header />
          <div className="mt-3 flex-grow flex items-center justify-center overflow-hidden rounded-5 relative">
            <img
              src="https://images5.alphacoders.com/135/thumbbig-1355115.webp"
              alt="moviePoster"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0">
              <PopularMovies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
