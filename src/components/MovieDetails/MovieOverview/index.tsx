"use client";
import React, { useState } from "react";
import IMDBIcon from "../../../../public/images/svg/IMDB";
import Button from "@/components/Button";
import StarRating from "@/components/StarRating";

const MovieOverview = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={() => setPlayVideo((prevState) => !prevState)}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          autoPlay={playVideo}
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="absolute z-10 w-full flex items-center justify-center h-full container">
        <div className="flex">
          <div className="flex w-4/5">
            <div
              className="relative rounded-lg shadow-md overflow-hidden group"
              style={{ width: "225px", flexShrink: 0 }}
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src="https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg"
                  alt="Static Movie Title"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                  style={{ transform: "scale(1)" }}
                />
              </div>
            </div>
            <div className="w-full ml-3">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-white text-5xl mb-4 font-bold animate-fadeIn">
                    The Dark Knight
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-white mb-4">
                      <div className="text-1xl flex items-center space-x-2">
                        <span>2016</span>
                        <span className="h-1 w-1 rounded-full bg-white"></span>
                        <span>Action</span>
                        <span className="h-1 w-1 rounded-full bg-white"></span>
                        <span>120min</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-1xl mb-4 animate-fadeIn w-full w-2/3">
                    Batman has a new foe, the Joker, who is an accomplished
                    criminal hell-bent on decimating Gotham City. Together with
                    Gordon and Harvey Dent, Batman struggles to thwart the Joker
                    before it is too late.
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button title="Add to Favorite" type="secondary" />
                  <Button title="Watch Now" type="tertiary" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <div>cast</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
