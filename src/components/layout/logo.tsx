import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(180, 52%, 65%)' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(335, 41%, 56%)' }} />
        </linearGradient>
      </defs>
      <g transform="translate(5, 5) scale(0.9) rotate(18, 50, 50)">
        <path
          d="M50 5 L92.5 35 L75 90 L25 90 L7.5 35 Z"
          fill="url(#logoGradient)"
        />
        <line x1="50" y1="5" x2="50" y2="-5" stroke="url(#logoGradient)" strokeWidth="5" />
        <line x1="92.5" y1="35" x2="105.5" y2="30" stroke="url(#logoGradient)" strokeWidth="5" />
        <line x1="75" y1="90" x2="82" y2="105" stroke="url(#logoGradient)" strokeWidth="5" />
        <line x1="25" y1="90" x2="18" y2="105" stroke="url(#logoGradient)" strokeWidth="5" />
        <line x1="7.5" y1="35" x2="-5.5" y2="30" stroke="url(#logoGradient)" strokeWidth="5" />
      </g>
    </svg>
  );
}

export default Logo;