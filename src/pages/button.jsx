import React from "react";

const NeuFollowButton = ({ data, link,src }) => {
    return (
        <div className="flex z-10 items-center justify-center bg-yellow-50 rounded-3xl p-3 sm:p-6 md:p-8">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 group flex w-full sm:w-fit items-center justify-between sm:justify-start gap-3 sm:gap-6 border-2 border-black bg-white px-4 py-3 sm:px-8 sm:py-4 transition-all duration-300 ease-out shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:translate-y-1 active:scale-95 cursor-pointer"
            >
                <span className="font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base text-black">
                    {data}
                </span>

                <img
                    src={src}
                    alt="Icon"
                    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:translate-x-2"
                />
            </a>
        </div>
    );
};

export default NeuFollowButton;