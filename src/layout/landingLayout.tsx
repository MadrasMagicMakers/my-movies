'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import LazyImage from "@/components/LazyImage";
import Button from "@/components/Button";

const LandingLayout = () => {
  const router = useRouter()

  const handleWatch = () => router.push('/movies');

  return (
    <div className="w-full h-screen flex items-end justify-center">
      <div className="absolute inset-0 z-0 animate-fade">
        <LazyImage
          src="https://postermemorabilia.com/cdn/shop/collections/1_jfR0trcAPT3udktrFkOebA_1200x1200.jpg?v=1566963161"
          alt="banner"
        />
      </div>
      <div className="absolute text-center bg-black bg-opacity-50 p-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-textGenerate">Experience Cinema Uninterrupted with Movies Now</h3>
        <p className="text-base md:text-lg lg:text-xl mb-8 animate-textGenerate">
          Immerse yourself in the world of cinema with Movies Now, your ultimate
          destination for movie enthusiasts. Discover a vast library of films
          ranging from beloved classics to the latest releases. Dive deep into
          movie details, explore comprehensive information including synopses,
          cast details, trailers, and more. Whether you're searching for movie
          recommendations or diving into film trivia, Movies Now offers a
          seamless and enriching experience. Start your cinematic journey today
          with Movies Now!
        </p>
        <Button title="Start Watching Now" onClick={handleWatch} />
      </div>
    </div>
  );
};

export default LandingLayout;
