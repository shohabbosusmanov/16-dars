import { type JSX } from "react";

interface IconProps {
    rightArrowIcon: () => JSX.Element;
    companyLogo: () => JSX.Element;
    correctIcon: () => JSX.Element;
    infoTimerIcon: () => JSX.Element;
}

const Icon: IconProps = {
    rightArrowIcon: () => {
        return (
            <svg
                width="16.000000"
                height="12.000000"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="arrow"
                    d="M15.79 5.38L15.7 5.29L10.7 0.29C10.31 -0.1 9.68 -0.1 9.29 0.29C8.93 0.65 8.9 1.22 9.2 1.61L9.29 1.7L12.58 5L1 5C0.44 5 0 5.44 0 6C0 6.51 0.38 6.93 0.88 6.99L1 7L12.58 7L9.29 10.29C8.93 10.65 8.9 11.22 9.2 11.61L9.29 11.7C9.65 12.06 10.22 12.09 10.61 11.79L10.7 11.7L15.7 6.7C16.06 6.34 16.09 5.77 15.79 5.38Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                />
            </svg>
        );
    },
    companyLogo: () => {
        return (
            <svg
                width="50.000000"
                height="50.000000"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                    id="Rectangle Copy"
                    rx="12.000000"
                    width="50.000000"
                    height="50.000000"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                />
                <rect
                    id="Rectangle Copy"
                    rx="12.000000"
                    width="50.000000"
                    height="50.000000"
                    stroke="#979797"
                    strokeOpacity="0"
                    strokeWidth="0.000000"
                />
                <mask
                    id="mask0_7170"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0.000000"
                    y="0.000000"
                    width="50.000000"
                    height="50.000000"
                >
                    <rect
                        id="Rectangle Copy"
                        rx="12.000000"
                        width="50.000000"
                        height="50.000000"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                    />
                    <rect
                        id="Rectangle Copy"
                        rx="12.000000"
                        width="50.000000"
                        height="50.000000"
                        stroke="#979797"
                        strokeOpacity="0"
                        strokeWidth="0.000000"
                    />
                </mask>
                <path
                    id="Fill 2"
                    d="M18 25C16.35 25 15 23.64 15 22C15 20.35 16.35 19 18 19C19.64 19 21 20.35 21 22C21 23.64 19.64 25 18 25Z"
                    fill="#3F8CFF"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                />
                <path
                    id="Fill 3"
                    d="M43 18.34C43 13.2 38.72 9 33.5 9L33.5 9C28.27 9 24 13.2 24 18.34L24 32C24 32 42.99 29.91 43 18.34C43 18.34 43 18.34 43 18.34Z"
                    fill="#3F8CFF"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                />
                <path
                    id="Fill 4"
                    d="M7 35.4995L7 35.498C7.00195 27.4473 21 26 21 26L21 35.4995C21 39.0747 17.8501 42 14 42C10.1499 42 7 39.0747 7 35.4995ZM12.1606 35.4995C12.1606 36.439 12.9883 37.2075 14 37.2075C15.0117 37.2075 15.8394 36.439 15.8394 35.4995C15.8394 34.5596 15.0117 33.791 14 33.791C12.9883 33.791 12.1606 34.5596 12.1606 35.4995Z"
                    clipRule="evenodd"
                    fill="#3F8CFF"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                />
            </svg>
        );
    },
    correctIcon: () => {
        return (
            <svg
                width="13.313721"
                height="9.071289"
                viewBox="0 0 13.3137 9.07129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="done"
                    d="M13.02 0.29C13.38 0.65 13.4 1.22 13.09 1.62L13.02 1.7L5.94 8.77C5.58 9.14 5.01 9.16 4.62 8.85L4.53 8.77L0.29 4.53C-0.1 4.14 -0.1 3.51 0.29 3.12C0.65 2.75 1.22 2.73 1.61 3.04L1.7 3.12L5.24 6.65L11.6 0.29C11.96 -0.07 12.54 -0.1 12.93 0.21L13.02 0.29Z"
                    fill="#3F8CFF"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                />
                <path
                    id="done"
                    d="M13.09 1.62L13.02 1.7L5.94 8.77C5.58 9.14 5.01 9.16 4.62 8.85L4.53 8.77L0.29 4.53C-0.1 4.14 -0.1 3.51 0.29 3.12C0.65 2.75 1.22 2.73 1.61 3.04L1.7 3.12L5.24 6.65L11.6 0.29C11.96 -0.07 12.54 -0.1 12.93 0.21L13.02 0.29C13.38 0.65 13.4 1.22 13.09 1.62Z"
                    stroke="#979797"
                    strokeOpacity="0"
                    strokeWidth="0.000000"
                />
            </svg>
        );
    },
    infoTimerIcon: () => {
        return (
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24.000000"
                height="24.000000"
                fill="none"
            >
                <rect
                    id="icn/general/hint"
                    width="24.000000"
                    height="24.000000"
                    x="0.000000"
                    y="0.000000"
                />
                <g id="icn/general/hint">
                    <rect
                        id="container"
                        width="24.000000"
                        height="24.000000"
                        x="0.000000"
                        y="0.000000"
                        fill="rgb(215.985,215.985,215.985)"
                        fillOpacity="0"
                    />
                    <rect
                        id="container"
                        width="24.000000"
                        height="24.000000"
                        x="0.000000"
                        y="0.000000"
                        stroke="rgb(150.96,150.96,150.96)"
                        strokeOpacity="0"
                        strokeWidth="0"
                    />
                    <path
                        id="info"
                        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.01 8C13.01 7.44772 12.5623 7 12.01 7L11.8834 7.00673C11.386 7.06449 11 7.48716 11 8C11 8.55228 11.4477 9 12 9L12.1266 8.99327C12.624 8.93551 13.01 8.51284 13.01 8ZM12 11C12.5128 11 12.9355 11.386 12.9933 11.8834L13 12L13 16C13 16.5523 12.5523 17 12 17C11.4872 17 11.0645 16.614 11.0067 16.1166L11 16L11 12C11 11.4477 11.4477 11 12 11Z"
                        fill="rgb(63,140,255)"
                        fillRule="evenodd"
                    />
                    <path
                        id="info"
                        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.01 8C13.01 7.44772 12.5623 7 12.01 7L11.8834 7.00673C11.386 7.06449 11 7.48716 11 8C11 8.55228 11.4477 9 12 9L12.1266 8.99327C12.624 8.93551 13.01 8.51284 13.01 8ZM12 11C12.5128 11 12.9355 11.386 12.9933 11.8834L13 12L13 16C13 16.5523 12.5523 17 12 17C11.4872 17 11.0645 16.614 11.0067 16.1166L11 16L11 12C11 11.4477 11.4477 11 12 11Z"
                        fillRule="evenodd"
                        stroke="rgb(150.96,150.96,150.96)"
                        strokeOpacity="0"
                        strokeWidth="0"
                    />
                </g>
            </svg>
        );
    },
};

export default Icon;
