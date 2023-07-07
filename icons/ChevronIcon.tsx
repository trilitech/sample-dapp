import React from "react";

interface SVGIconProps {
  stroke?: string;
}

const ChevronIcon: React.FC<SVGIconProps> = ({ stroke = "black" }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L5 5L1 1"
      stroke="#010807"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ChevronIcon;
