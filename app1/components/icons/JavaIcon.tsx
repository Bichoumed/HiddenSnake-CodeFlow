import React from "react";

export const JavaIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Steam */}
        <path
            d="M70.4 30.6c-2.5 4.5-8.8 6.6-10.9 11.4-2.2 5 1.5 10.2 1.5 15.4 0 3.8-1.8 7.3-4.4 10.1"
            fill="none"
            stroke="#E76F00"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <path
            d="M90.4 20.6c-2.5 4.5-8.8 6.6-10.9 11.4-2.2 5 1.5 10.2 1.5 15.4 0 3.8-1.8 7.3-4.4 10.1"
            fill="none"
            stroke="#E76F00"
            strokeWidth="6"
            strokeLinecap="round"
        />

        {/* Cup Body */}
        <path
            d="M34 68c0 20 15 38 40 38 20 0 36-14 39-32h8c6 0 11-5 11-11s-5-11-11-11h-6v-4H34v20z"
            fill="#5382A1"
        />
        {/* Cup Handle Detail */}
        <path
            d="M113 63c0 2.2-1.8 4-4 4h-4v-8h4c2.2 0 4 1.8 4 4z"
            fill="#5382A1"
        />
        {/* Coffee Liquid Surface */}
        <path
            d="M38 68h70c-2 10-15 18-35 18-20 0-33-8-35-18z"
            fill="#3D6889"
        />
    </svg>
);
