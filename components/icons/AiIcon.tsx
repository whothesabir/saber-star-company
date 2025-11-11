import React from 'react';

const AiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 13.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 1 0v4.5a.5.5 0 0 1-.5.5z" />
    <path d="M14.5 13.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 1 0v4.5a.5.5 0 0 1-.5.5z" />
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
    <path d="M16 17.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5z" />
    <path d="M8 17.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5z" />
  </svg>
);

export default AiIcon;
