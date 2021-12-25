import React, { FC } from "react";
import { SpinnerProps } from ".";

const SpinnerCrescent: FC<SpinnerProps> = ({ className, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      <svg
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        style={{ stroke: "currentcolor" }}
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="3">
            <path
              d="M17.5,0 a17.5,17.5 0 0 1 17.5 17.5"
              style={{ stroke: "currentcolor" }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SpinnerCrescent;