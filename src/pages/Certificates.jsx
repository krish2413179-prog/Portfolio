import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ certificate }) => {


    return (
        <motion.a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 transition-all duration-300 hover:-translate-y-2  hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >

            <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-zinc-900">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />


                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full  p-3  backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </span>
                </div>
            </div>


            <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-300 transition-colors group-hover:text-white line-clamp-2">
                    {certificate.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-semibold ">
                        {certificate.issuer}
                    </p>
                    <p className="text-xs text-gray-500">
                        {certificate.date}
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

export default CertificateCard;