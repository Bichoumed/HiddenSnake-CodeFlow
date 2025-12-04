import React from "react";

export const CIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="64" cy="64" r="64" fill="#00599C" />
        <path
            fill="#FFFFFF"
            d="M89.5 36.5c-6.6-5.2-15.4-8.5-25.5-8.5-22.1 0-40 17.9-40 40s17.9 40 40 40c10.1 0 18.9-3.3 25.5-8.5l9.5 11.5c-9.2 7.8-21.5 12.5-35 12.5-30.4 0-55-24.6-55-55s24.6-55 55-55c13.5 0 25.8 4.7 35 12.5l-9.5 11.5z"
        />
    </svg>
);
