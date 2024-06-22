import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="p-[3px] relative" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black bg-opacity-75 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  );
};

export default Button;
