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
        <filter id="xidstt6fxa">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g transform="translate(-1148 -43) translate(24 24) translate(1080 19)">
              <g>
                <path
                  fill={isHover === name ? "#6dbbcc" : color}
                  fillRule="nonzero"
                  d="M23 11.42c-.52.242-1.075.401-1.654.479.595-.375 1.05-.964 1.263-1.674-.555.35-1.167.596-1.82.733-.527-.592-1.278-.958-2.097-.958-1.589 0-2.868 1.36-2.868 3.029 0 .24.02.47.067.69-2.386-.123-4.498-1.33-5.916-3.167-.248.453-.393.972-.393 1.53 0 1.05.512 1.979 1.275 2.517-.461-.01-.914-.15-1.297-.373v.033c0 1.471.995 2.694 2.3 2.975-.234.068-.489.1-.753.1-.184 0-.37-.011-.543-.052.371 1.2 1.427 2.08 2.681 2.11-.976.805-2.216 1.29-3.558 1.29-.236 0-.461-.01-.687-.04 1.271.864 2.778 1.358 4.403 1.358 5.281 0 8.169-4.615 8.169-8.616 0-.134-.004-.263-.01-.391.57-.427 1.048-.96 1.438-1.572z"
                  transform="translate(44)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};