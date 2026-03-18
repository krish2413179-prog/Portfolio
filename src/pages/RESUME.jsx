import React from "react";

import { Link } from "react-router-dom";


const NeuFollowButton2 = () => {
    return (
        <div className="flex z-10 items-center justify-center  mx-8 rounded-3xl p-8 h-1">


            <Link
                to="/info"

                className="z-10 group flex w-fit items-center gap-6 border-2 border-black bg-gray-700 px-8 py-4 transition-all duration-300 ease-out shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:translate-y-2 active:scale-95 cursor-pointer"
            >
                <span className="font-bold uppercase tracking-widest text-white">
                    My Resume
                </span>


            </Link>

        </div>
    );
};

export default NeuFollowButton2;