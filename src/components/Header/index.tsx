import React, { useState, useRef, useCallback } from "react";
import SearchIcon from "../../../public/images/svg/SearchIcon";
import CloseIcon from "../../../public/images/svg/CloseIcon";
import LazyImage from "../LazyImage";
import { navLinks } from "@/constants";

const Header = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = useCallback(() => {
    if (searchInputRef.current?.value) {
      searchInputRef.current.value = "";
      searchInputRef.current?.focus();
      return;
    }
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [showSearch]);

  return (
    <header>
      <nav className="relative flex justify-between items-center">
        <LazyImage src="/images/logo.png" alt="Logo" width={150} height={100} />
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full flex items-center w-auto">
          <div
            className={`flex items-center transition-all duration-300 ${
              showSearch ? "opacity-0" : "opacity-100"
            }`}
          >
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-white-600 text-sm mx-4 hover:text-white-400"
                aria-label={name}
              >
                {name}
              </a>
            ))}
          </div>
          {showSearch && (
            <input
              type="text"
              className="absolute bg-black text-white rounded-full px-4 py-2 pr-[35px] text-sm left-0 w-full h-full"
              placeholder="Search..."
              value={searchInputRef.current?.value}
              ref={searchInputRef}
              aria-label="Search"
            />
          )}
          <button
            onClick={handleSearch}
            className="cursor-pointer relative focus:outline-none"
            aria-label={showSearch ? "Close Search" : "Open Search"}
          >
            {showSearch ? <CloseIcon /> : <SearchIcon />}
          </button>
        </div> */}

        {/* new input ui */}
        <div className="relative">
          <div
            className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer transition-all duration-300 ${
              isExpanded ? "w-48" : ""
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <svg
              className={`h-6 w-6 text-gray-500 z-10 transition-transform duration-300 transform ${
                isExpanded ? "absolute right-5" : ""
              }  ${isExpanded ? "-rotate-370" : "rotate-0"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className={`absolute top-0 left-0 w-48 h-12 px-4 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          />
        </div>

        <div className="hidden h-[40px] w-[40px] rounded-full bg-glass flex items-center justify-center">
          <LazyImage
            src="https://jodilogik.com/wp-content/uploads/2016/05/people-1.png"
            alt="profile"
            width={30}
            height={30}
          />
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
