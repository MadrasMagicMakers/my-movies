"use client";
import React, { useState } from "react";
import IMDBIcon from "../../../../../public/images/svg/IMDB";
import Button from "@/components/Button";
import StarRating from "@/components/StarRating";

function VideoComponent() {
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
      <div className="absolute z-10 w-full bottom-0">
        <div
          className="relative rounded-lg shadow-md overflow-hidden group m-4"
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
        <div className="flex flex-col md:flex-row items-start justify-between p-4 bg-gradient-to-t from-black via-black to-transparent space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-3/5">
            <div className="title text-white text-5xl mb-4 font-bold animate-fadeIn">
              The Dark Knight
            </div>
            <div>
              <hr className="border-gray-600 mb-4" />
              <div className="flex items-center justify-between text-white mb-4">
                <div className="text-lg flex items-center space-x-4">
                  <span className="font-semibold">Year:</span>
                  <span>2016</span>
                  <span className="border-l border-gray-600 h-6"></span>
                  <span className="font-semibold">Genre:</span>
                  <span>Action</span>
                  <span className="border-l border-gray-600 h-6"></span>
                  <span className="font-semibold">Duration:</span>
                  <span>120min</span>
                  <span className="border-l border-gray-600 h-6"></span>
                  <div className="flex items-center space-x-2">
                    <IMDBIcon />
                    <span>8.5/10</span>
                  </div>
                </div>
              </div>
              <hr className="border-gray-600 my-4" />
            </div>
            <div className="description text-white text-1xl mb-4 animate-fadeIn">
              Batman has a new foe, the Joker, who is an accomplished criminal
              hell-bent on decimating Gotham City. Together with Gordon and
              Harvey Dent, Batman struggles to thwart the Joker before it is too
              late.
            </div>
            <div className="flex items-center">
              <StarRating rating={8.5} />
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-2">
              <Button title="Add to Favorite" type="secondary" />
              <Button title="Watch Now" type="tertiary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
