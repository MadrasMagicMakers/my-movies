'use client'
import React, { useState } from 'react';

const SearchInput = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative transition-all duration-300 ${isFocused ? 'w-80' : 'w-64'} bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-full`}>
            <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-10 rounded-full bg-transparent text-white placeholder-gray-300 focus:placeholder-gray-400 transition-all duration-300 w-full border-none focus:outline-none bg-glass"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <div className="absolute left-3 top-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.35a7.5 7.5 0 010 14.3z" />
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;
