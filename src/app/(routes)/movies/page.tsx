"use client";
import React from "react";
import Header from "@/components/Header";
import PopularMovies from "@/components/MovieTypes/PopularMovies";
import TrendingMovies from "@/components/MovieTypes/TrendingMovies";
import UpcomingMovies from "@/components/MovieTypes/UpcomingMovies";
import TopRatedMovies from "@/components/MovieTypes/TopRatedMovies";

const Movies = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
      <div>
        <PopularMovies />
        <TrendingMovies />
        <UpcomingMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
};

export default Movies;
