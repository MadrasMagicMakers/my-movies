import React, { useState, useRef, useCallback } from "react";
import SearchIcon from "../../../public/images/svg/SearchIcon";
import CloseIcon from "../../../public/images/svg/CloseIcon";
import LazyImage from "../LazyImage";
import { navLinks } from "@/constants";

const Header = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = useCallback(() => {
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full flex items-center w-auto">
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
        </div>
        <div className="h-[40px] w-[40px] rounded-full bg-glass flex items-center justify-center">
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
