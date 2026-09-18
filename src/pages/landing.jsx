import React, {useEffect, useRef, useState} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import krish from "../assets/krish.png"
import DotGrid from './dotgrid.jsx';
import Shuffle from './text.jsx';
import CertificateCard from "./Certificates.jsx";
import Certi1 from "../assets/02d6c484-1.png"
import Certi2 from "../assets/34b23820-1.png"
import Certi3 from "../assets/d07db09b-1.png"
import C from"../assets/c.png"
import tail from"../assets/tail.png"
import ts from"../assets/ts.png"
import fire from"../assets/fire.png"
import eth from"../assets/ethereum.png"
import solid from"../assets/solidity.png"
import react from"../assets/react.png"
import js from"../assets/js.png"
import NeuFollowButton from "./button.jsx";
import NeuFollowButton2 from "./RESUME.jsx";
import NeuButton from "./connect.jsx";
import {Link} from "react-router-dom";



const Landing = () => {

    const myCertificates = [
        {
            id: 1,
            title: "Blockchain 101",
            issuer: "Infosys Springboard",
            date: "March 2026",
            image: Certi1,
            link: "https://validate.onwingspan.com"
        },
        {
            id: 2,
            title: "Blockchain in Depth",
            issuer: "Infosys Springboard",
            date: "March 2026",
            image: Certi2,
            link: "https://validate.onwingspan.com"
        },
        {
            id: 3,
            title: "Blockchain for Enterprises",
            issuer: "Infosys Springboard",
            date: "March 2026",
            image: Certi3,
            link: "https://validate.onwingspan.com"
        }
    ];

    const marqueeRef = useRef(null);
    const { scrollYProgress: marqueeScroll } = useScroll({
        target: marqueeRef,


    });


    const translateX = useTransform(marqueeScroll, [0, 1], ["0%", "-50%"]);

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
    )
    const projects = [
        {
            id: 1,
            name: "Learn Ledger",
            desc: "A privacy-first AI tutor on Ethereum that mints dynamic learning history as NFTs, featuring a model-agnostic orchestrator.",
            tag: "AI & Web3",
            link: "https://github.com/krish2413179-prog/AiTutor"
        },
        {
            id: 2,
            name: "DealFlow",
            desc: "An automated insurance claims engine using Gemini Vision API for real-time receipt validation and instant settlement.",
            tag: "FinTech Automation",
            link: "https://github.com/krish2413179-prog/DealFlow"
        },
        {
            id: 3,
            name: "Mantle GameFi",
            desc: "Gasless gaming architecture on Mantle L2 featuring meta-transactions, permission delegation, and WebSocket state sync.",
            tag: "GameFi",
            link: "https://github.com/krish2413179-prog/Mantle"
        },
        {
            id: 4,
            name: "Domino Market",
            desc: "A decentralized marketplace application engineered for secure, transparent, peer-to-peer digital asset trading.",
            tag: "dApp",
            link: "https://github.com/krish2413179-prog/Domino-Market"
        },
        {
            id: 5,
            name: "Rumble Tipping Bot",
            desc: "An automated creator-support bot enabling seamless, real-time micro-transactions and tipping for live streams.",
            tag: "Web3 Utility",
            link: "https://github.com/krish2413179-prog/Rumble-Tipping-Bot"
        }
    ];

     const techStack = [
        {
            id: 1,
            image : eth,
            name: "Ethereum",
            desc: "Deploying and interacting with the primary network for decentralized logic.",
            tag: "Web3"
        },
        {
            id: 2,
            image : solid,
            name: "Solidity",
            desc: "Drafting, testing, and deploying secure smart contracts for decentralized apps.",
            tag: "Smart Contracts"
        },
        {
            id: 3,
            image : react,
            name: "React (JSX/TSX)",
            desc: "Building interactive, component-driven user interfaces.",
            tag: "Frontend"
        },
        {
            id: 4,
            image: js,
            name: "JavaScript",
            desc: "Adding dynamic interactivity and core logic to modern web applications.",
            tag: "Language"
        },
        {
            id: 5,
            image : ts,
            name: "TypeScript",
            desc: "Ensuring type-safe, scalable code for complex frontend and Web3 projects.",
            tag: "Language"
        },
        {
            id: 6,
            image : tail,
            name: "Tailwind CSS",
            desc: "Styling highly responsive, modern user interfaces rapidly.",
            tag: "Frontend"
        },
        {
            id: 7,
            image : C ,
            name: "C/C++",
            desc: "Writing high-performance algorithms and tackling competitive programming.",
            tag: "Language"
        },
        {
            id: 8,
            name: "Firebase",
            image : fire,
            desc: "Managing real-time databases and handling rapid backend authentication.",
            tag: "Backend"
        }
    ];

    const greetings = [
        "Hello", "नमस्ते", "Привет",  "Bonjour",
         "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao","Hello", "नमस्ते", "Привет", "Bonjour",
        "Ciao"
    ];

    const [index, setIndex] = useState(0);
    const [lineHeight, setLineHeight] = useState(80);

    useEffect(() => {
        const updateLineHeight = () => {
            if (window.innerWidth < 640) {
                setLineHeight(44);
            } else if (window.innerWidth < 1024) {
                setLineHeight(60);
            } else {
                setLineHeight(80);
            }
        };
        updateLineHeight();
        window.addEventListener('resize', updateLineHeight);
        return () => window.removeEventListener('resize', updateLineHeight);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [greetings.length]);

    return (
        <div className="relative flex flex-col min-h-screen w-full justify-start items-center text-white gap-10 overflow-x-hidden">

            <div className="fixed inset-0 z-0 pointer-events-auto">
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#262527"
                    activeColor="#9fb9d5"
                    proximity={120}
                    shockRadius={500}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>
            <div className="relative z-10 container mt-[6vh] sm:mt-[10vh] px-4 sm:px-8 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 max-w-7xl mx-auto">

                <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 shrink-0 rounded-full overflow-hidden mx-auto md:mx-4">
                    <img
                        src={krish}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    style={{ height: `${lineHeight}px` }}
                    className="overflow-hidden"
                >
                    <motion.div
                        animate={{ y: -(index * lineHeight)}}
                        transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                        className="flex flex-col items-center md:items-end"
                    >
                        {greetings.map((word, i) => (
                            <h1
                                key={i}
                                style={{ height: `${lineHeight}px` }}
                                className={`text-3xl sm:text-5xl md:text-7xl font-bold transition-opacity duration-500 flex items-center ${
                                    i === index ? "text-yellow-600 opacity-100" : i<=index+2 ?"text-gray-600 opacity-30 ":" text-gray-600 opacity-0"
                                }`}
                            >
                                {word}
                            </h1>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-col w-full max-w-full md:max-w-xl items-center md:items-start text-center md:text-left">
                    <Shuffle
                        className="font-name whitespace-normal sm:whitespace-nowrap mt-2"
                        text=", I am Krish Sharma"
                        shuffleDirection="right"
                        duration={0.35}
                        animationMode="evenodd"
                        shuffleTimes={2}
                        ease="power3.out"
                        stagger={0.03}
                        threshold={0.1}
                        triggerOnce={true}
                        triggerOnHover
                        respectReducedMotion={true}
                        loop={true}
                        loopDelay={3}
                    />
                    <br/>

                <h2 className="text-base sm:text-2xl md:text-4xl text-center md:text-left font-para text-yellow-100 mx-2 sm:mx-4">
                      I focus on Ethereum and modern frontend design. I build decentralized apps and smooth experiences on different platforms using React. I enjoy making secure smart contracts and great user interfaces.
                </h2>
            </div>

            </div>


            {/* Upper part ended */}
            <div className="flex flex-col gap-8 w-full items-center">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full max-w-5xl gap-4 sm:gap-6 md:gap-10 px-4 sm:px-10">
                    <NeuFollowButton2 />
                    <NeuFollowButton data="GitHub"
                                     link="https://github.com/krish2413179-prog"
                                     src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000"
                    >
                    </NeuFollowButton>

                    <NeuFollowButton data="LinkedIn"
                                     link="https://www.linkedin.com/in/krish-sharma-t/"
                                     src="https://img.icons8.com/?size=100&id=64154&format=png&color=000000">
                    </NeuFollowButton>
                </div>
                <br/>
                <div className="pointer-events-none absolute left-0 z-10 h-full w-6 sm:w-16 md:w-32 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute right-0 z-10 h-full w-6 sm:w-16 md:w-32 bg-gradient-to-l from-black to-transparent" />

                <motion.div
                    className="flex w-max cursor-grab active:cursor-grabbing"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {[...Array(2)].map((_,i)=>(
                        <div key={i} className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                            {techStack.map((tech)=>(
                                <div key={tech.id}
                                     className="group relative flex h-72 sm:h-80 w-60 sm:w-72 shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/80 p-5 sm:p-6 transition-all hover:-translate-y-2 hover:border-purple-500/50 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                    <div>
                                        <div className="mb-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 transition-colors group-hover:bg-purple-500/20 overflow-hidden" >
                                            <img src={tech.image} alt="logo"/>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-400 transition-colors group-hover:text-white">
                                            {tech.name}
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                            {tech.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}



                        </div>
                    ))}
                </motion.div>



  </div>



            <motion.div
                ref={ref}
                style={{ clipPath }}

                className="relative flex flex-row justify-center text-white text-center mt-[12vh] md:mt-[20vh] w-full max-w-full"
            >

                <div ref={marqueeRef} className="relative h-[250vh] sm:h-[300vh] w-full">

                <div className="fixed top-0 flex-col h-screen w-full items-start overflow-hidden">

                    <h1 className="font-web3 text-4xl sm:text-6xl md:text-7xl text-gold-400 text-center mt-[8vh] md:mt-[10vh] w-full">Projects</h1>

                    <motion.div
                        className="flex w-max mt-[15vh] sm:mt-[20vh] md:mt-[25vh]"

                        style={{ x: translateX }}

                    >
                        {[...Array(2)].map((_,i)=>(
                            <div key={i} className="z-20 flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="group relative flex h-[320px] sm:h-[350px] w-[290px] sm:w-[380px] md:w-[420px] shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950/80 p-5 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/90 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-md overflow-hidden"
                                    >

                                        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl transition-all duration-700"></div>

                                        <div className="relative z-10 flex flex-col h-full">

                                            <div className="flex items-start justify-between w-full">

                                            </div>


                                            <div className="mt-2 sm:mt-6 flex flex-col gap-2 sm:gap-3 flex-grow">
                                                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-wide transition-colors duration-300">
                                                    {project.name}
                                                </h3>
                                                <p className="text-xs sm:text-base text-gray-400 leading-relaxed line-clamp-3">
                                                    {project.desc}
                                                </p>
                                            </div>


                                            <div className="mt-auto flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 transition-colors duration-300 group-hover:text-white pt-4 border-t border-white/10">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="z-10 group flex w-fit items-center gap-3 sm:gap-6 border-2 border-black bg-white px-4 py-2 sm:px-8 sm:py-4 transition-all duration-300 ease-out shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:translate-y-1 active:scale-95 cursor-pointer">
                                                    <span className="font-bold uppercase tracking-wider sm:tracking-widest text-black text-xs sm:text-sm">Link To Github
    </span>
                                                </a>


                                                <svg
                                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 text-purple-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>



                </div>


                </div>

            </motion.div>







<div className="z-10 min-h-screen w-full flex flex-col items-center px-4 py-16">
    <h1 className="font-web3 text-4xl sm:text-6xl md:text-7xl text-white text-center mt-[5vh] md:mt-[10vh]">Certificates</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 md:mt-20 max-w-6xl w-full justify-items-center">

        {myCertificates.map((cert) => (
            <CertificateCard
                key={cert.id}
                certificate={cert}
            />
        ))}
    </div>


</div>


            <div className="z-10 flex flex-col items-center w-full mt-16 sm:mt-32 mb-16 sm:mb-32 px-4 sm:px-10">
                <h1 className="font-web3 text-4xl sm:text-6xl md:text-7xl text-purple-400 text-center mb-8 sm:mb-16">
                    Let's Connect
                </h1>

                <form className="w-full max-w-2xl flex flex-col gap-4 sm:gap-6 bg-zinc-950/80 border border-white/10 p-5 sm:p-10 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.05)] backdrop-blur-sm">
               <NeuButton data ="Connect on Telegram"
               src="https://img.icons8.com/?size=100&id=k4jADXhS5U1t&format=png&color=000000"
               link="https://t.me/Krish_Sharma_dev">
               </NeuButton>
                    <NeuButton data="Lets Yap on x Together"
                    src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
                    link="https://x.com/KrishSharma2006">
                    </NeuButton>
                    <NeuButton data="Mail Me Here"
                    src="https://img.icons8.com/?size=100&id=6QtoKjRma1Cq&format=png&color=000000"
                    link="mailto:keshavsharma2118@gmail.com">
                    </NeuButton>

                </form>


            </div>
        </div>
    );
};

export default Landing;