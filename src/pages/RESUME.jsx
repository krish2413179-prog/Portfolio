import React from "react";

import { Link } from "react-router-dom";


const NeuFollowButton2 = () => {
    return (
        <div className="flex z-10 items-center justify-center p-3 sm:p-6 md:p-8">
            <Link
                to="/info"
                className="z-10 group flex w-full sm:w-fit items-center justify-center gap-6 border-2 border-black bg-gray-700 px-4 py-3 sm:px-8 sm:py-4 transition-all duration-300 ease-out shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:translate-y-1 active:scale-95 cursor-pointer"
            >
                <span className="font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base text-white">
                    My Resume
                </span>
            </Link>
        </div>
    );
};

export default NeuFollowButton2;