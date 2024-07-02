import React, { useMemo } from "react";

type ButtonType = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  title: string;
  type: ButtonType;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  const buttonStyle = useMemo(() => {
    switch (type) {
      case "primary":
        return "p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white";
      case "secondary":
        return "p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white";
      case "tertiary":
        return "p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white";
      default:
        return "";
    }
  }, [type]);

  const hoverStyle = useMemo(() => {
    switch (type) {
      case "primary":
        return "px-8 py-2 bg-black bg-opacity-75 hover:bg-transparent";
      case "secondary":
        return "px-8 py-2 hover:bg-black hover:bg-opacity-75";
      case "tertiary":
        return "px-8 py-2 bg-black";
      default:
        return "";
    }
  }, [type]);

  return (
    <button
      className={`rounded-[25px] relative ${buttonStyle}`}
      onClick={onClick}
    >
      <div
        className={`rounded-[25px] relative group transition duration-200 ${hoverStyle}`}
      >
        {title}
      </div>
    </button>
  );
};

export default Button;
