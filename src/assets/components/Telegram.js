import React from "react";

export default ({ color, isHover = null, name }) => {
 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <filter id="7pad2xe3ua">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="#ada" fillRule="evenodd">
        <g>
          <g>
            <g
           
              transform="translate(-1104 -43) translate(24 24) translate(1080 19)"
            >
              <path
                fill={isHover === name ? "#6dbbcc" : color}
                fillRule="nonzero"
                d="M9.247 15.754l3.226 1.185 1.249 3.953c.08.254.394.347.603.18l1.798-1.444c.189-.151.457-.159.654-.018l3.243 2.318c.224.16.54.04.596-.226l2.376-11.25c.06-.291-.229-.533-.51-.426L9.245 15.054c-.327.124-.324.58.003.7zm4.274.554l6.304-3.822c.113-.069.23.082.133.17l-5.203 4.762c-.183.168-.301.392-.335.636l-.177 1.293c-.023.172-.27.19-.318.022l-.682-2.358c-.078-.269.036-.556.278-.703z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
