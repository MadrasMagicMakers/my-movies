import React from "react";
import SearchInput from "../SearchInput";
import Button from "../Button";
import LazyImage from "../LazyImage";

const Header = () => {
  return (
    <header className="bg-purple-400 bg-opacity-20 backdrop-filter backdrop-blur-md border border-gray-100 rounded-full shadow-lg fixed top-5 left-0 right-0 mx-auto w-4/5 z-10">
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
              </a>{" "}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
