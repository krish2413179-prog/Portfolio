import React from 'react';
import resumePDF from '../assets/krish.pdf';

const Info = () => {
    return (

        <div className="flex justify-center w-screen h-screen bg-zinc-950 overflow-hidden m-0 p-0">


            <iframe
                src={`${resumePDF}#view=FitH`}
                title="Krish Sharma Resume"
                className="w-full max-w-3xl h-full border-none shadow-[0_0_80px_rgba(0,0,0,0.5)]"
            />

        </div>
    );
};

export default Info;