import React from "react";

export const GoIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="64" cy="64" r="64" fill="#00ADD8" />
        <path
            fill="#FFFFFF"
            d="M35 64c0-15 12-27 27-27 10 0 18 5 23 12l-9 9c-3-4-8-7-14-7-8 0-14 7-14 15s6 15 14 15c6 0 10-3 12-7h-12v-11h25v12c-2 13-13 23-25 23-15 0-27-12-27-27z"
        />
        <circle cx="95" cy="64" r="10" fill="#FFFFFF" />
    </svg>
);
