import React from "react";

const NeuFollowButton = ({ data, link,src }) => {
    return (

        <div className="flex  z-10 items-center justify-center bg-yellow-50 rounded-3xl  p-8">


            <a
                href={link} // <-- Put your actual GitHub link here
                target="_blank"
                rel="noopener noreferrer" // Security best practice for opening new tabs
                className="z-10 group flex w-fit items-center gap-6 border-2 border-black bg-white px-8 py-4 transition-all duration-300 ease-out shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:translate-y-2 active:scale-95 cursor-pointer"
            >
    <span className="font-bold uppercase tracking-widest text-black">
        {data}
    </span>


                <img
                    src={src}
                    alt="Icon"
                    className="h-10 w-10 transition-transform duration-300 group-hover:translate-x-2"
                />
            </a>

        </div>
    );
};

export default NeuFollowButton;