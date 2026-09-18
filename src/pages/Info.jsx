import React from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/krish.pdf';

const Info = () => {
    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-zinc-950 text-white p-4 sm:p-6">
            {/* Top Navigation Bar */}
            <div className="w-full max-w-4xl flex items-center justify-between py-4 mb-4 border-b border-white/10">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-300 hover:text-purple-400 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Portfolio
                </Link>

                <a
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Krish_Sharma_Resume.pdf"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-md active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download PDF
                </a>
            </div>

            {/* Resume PDF Viewer Container */}
            <div className="w-full max-w-4xl flex-grow h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-zinc-900">
                <iframe
                    src={`${resumePDF}#view=FitH`}
                    title="Krish Sharma Resume"
                    className="w-full h-full border-none"
                />
            </div>
        </div>
    );
};

export default Info;