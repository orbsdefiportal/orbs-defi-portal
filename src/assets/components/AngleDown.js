import React from "react";

export default ({ name, isHover = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      viewBox="0 0 18 16"
    >
      <defs>
        <filter id="e5r01w8sga">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g>
          <g>
            <g transform="translate(-571 -51) translate(24 24) translate(486 19)">
              <g>
                <path
                  // fill={isHover === name ? "#6dbbcc" : color}
                  stroke={isHover === name ? "#6dbbcc" : "#fff"}
                  strokeWidth="2"
                  d="M4.966 6.667L8.509 10 12.06 6.667"
                  transform="translate(61.718 8)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
