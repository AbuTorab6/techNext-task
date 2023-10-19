import React from "react";
import { SVGProps } from "react";

export const IconSearch = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0_538_464)">
        <path fill="#fff" fillOpacity="0.01" d="M0 0H16V16H0z"></path>
        <g clipPath="url(#clip1_538_464)">
          <path
            fill="#fff"
            d="M11.742 10.343a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 101.415-1.414l-3.85-3.85a1.012 1.012 0 00-.115-.1v.001zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_538_464">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
        <clipPath id="clip1_538_464">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
