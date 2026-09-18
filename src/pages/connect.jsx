import React from "react";

const NeuButton = ({ data, src, link }) => {
    return (
        <div className="flex z-10 items-center justify-center bg-zinc-950 rounded-2xl border-2 border-black p-2 sm:p-4 my-1 hover:border-purple-500/50">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 group flex w-full h-full items-center justify-between border-2 border-black bg-white px-3 py-2 sm:px-4 sm:py-3 transition-all duration-300 ease-out shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:translate-y-1 active:scale-95 cursor-pointer"
            >
                <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                    <img
                        src={src}
                        alt="Icon"
                        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
                    />
                    <span className="font-para text-xs sm:text-base md:text-xl uppercase tracking-wider sm:tracking-widest text-black group-hover:text-purple-600 transition-colors truncate">
                        {data}
                    </span>
                </div>
                {/* Arrow from Hover.dev image */}
                <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </span>
            </a>
        </div>
    );
};

export default NeuButton;