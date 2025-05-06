import { SVGProps } from "react";

export const AuthorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="12" fill="#e0e0e0" />
    <path
      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      stroke="black"
      fill="none"
      strokeWidth="2"
    />
    <circle cx="12" cy="7" r="4" stroke="black" fill="none" strokeWidth="2" />
  </svg>
);
