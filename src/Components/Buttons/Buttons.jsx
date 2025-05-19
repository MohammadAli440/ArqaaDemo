import React from "react";
import { Arrow } from "../../images";

const Buttons = ({ 
  buttonText = "Button", 
  bgColor = "#434E24", 
  textColor = "#F5F2EE",
  className = ""
}) => {
  return (
    <button 
      className={`flex items-center justify-center gap-4 w-3xs h-16 rounded-xl font-bold cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg
        active:scale-95
        ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {buttonText}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default Buttons;
