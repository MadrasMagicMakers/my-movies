import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import LazyImage from "../LazyImage";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-purple-400 bg-opacity-20 backdrop-filter backdrop-blur-md border border-gray-100 rounded-full shadow-lg fixed top-5 left-0 right-0 mx-auto w-4/5 z-10 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-between items-center">
          <LazyImage
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={100}
          />
          <div className="flex items-center">
            <SearchInput />
            <div className="flex items-center">
              <a
                href="/"
                className="text-gray-600 text-sm mx-4 hover:text-gray-400"
              >
                Browse Movies
              </a>
              <a
                href="/"
                className="text-gray-600 text-sm mr-4 hover:text-gray-400"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
