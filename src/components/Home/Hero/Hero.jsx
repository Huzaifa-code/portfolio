import React, { useEffect, useRef } from 'react';
import img1 from './assets/select1.png';
import img2 from './assets/magic-wand1.png';
import insta from './assets/Instagram.svg';
import lin from './assets/Linkedin.svg';
import gh from './assets/Github.svg';
import profileimg from './assets/profile.svg';
import { Link } from "react-scroll";
import './Hero.css';
import MangaText from '../../Blog/MangaText';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ParallaxText({ children, baseVelocity = 70 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden tracking-tighter leading-none m-0 whitespace-nowrap flex flex-nowrap py-2">
      <motion.div className="scroller text-black dark:text-yellow-400 font-extrabold text-2xl md:text-3xl uppercase whitespace-nowrap flex flex-nowrap tracking-wider" style={{ x }}>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
      </motion.div>
    </div>
  );
}

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='relative w-full max-w-7xl mx-auto px-4 pt-6 pb-12 font-sans'>

      {/* Hero Bento/Manga Card Container */}
      <div className="relative bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-12 overflow-hidden my-6">
        {/* Halftone Overlay */}
        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        {/* Decorative Comic Badges */}
        <div className="absolute top-0 left-0 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-r-4 border-b-4 border-black dark:border-black z-20 font-bold">
          HERO. 01 / PORTFOLIO
        </div>

        <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-l-4 border-b-4 border-black z-20 font-bold">
          VOL. 01
        </div>

        <div className="text-center pt-8 pb-4">
          <div className="mb-2">
            <MangaText text="「開発者」" translation="Kaihatsha (Software Developer)" className="text-lg md:text-xl text-red-600 dark:text-yellow-400 tracking-wider font-extrabold uppercase" />
          </div>

          <div className="inline-block bg-yellow-400 text-black px-4 py-1 brutalist-border brutalist-shadow-sm font-black uppercase text-xs md:text-sm tracking-widest transform -rotate-1 mb-4">
            SOFTWARE DEVELOPER &amp; ENGINEER
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              Hi, I am
            </h2>
            <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white uppercase tracking-tight my-2">
              Huzaifa Qureshi
            </h1>

            <p className="text-base md:text-xl font-medium text-neutral-800 dark:text-neutral-200 mt-4 leading-relaxed max-w-2xl text-center">
              I focus on developing scalable, high-performance applications and contributing to open-source projects, driving innovation and digital transformation in tech.
            </p>

            <div className="relative mt-8">
              <Link
                smooth spy to="contact"
                className="py-4 px-8 bg-yellow-400 hover:bg-yellow-300 text-black brutalist-border brutalist-shadow-sm hover:-translate-y-1 active:translate-y-1 transition-all duration-150 font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer"
              >
                Hire Me <img className="h-5 invert" src={profileimg.src || profileimg} alt="" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Parallax Ticker Section with Neo-Brutalist Border */}
      <div className="my-8 brutalist-border border-x-0 border-y-4 border-black dark:border-[#EBD3F8] bg-yellow-400 dark:bg-[#1E112C] py-2 brutalist-shadow-sm">
        <ParallaxText baseVelocity={-2}>SOFTWARE ENGINEER ★ MERN ★ FULL STACK DEV ★</ParallaxText>
        <ParallaxText baseVelocity={2}>DOTNET ★ C# ★ UI/UX WEB DESIGNER ★ FIGMA ★</ParallaxText>
      </div>

      {/* Floating Side Social Links */}
      <div className="fixed left-auto right-4 md:right-8 bottom-8 md:bottom-12 flex flex-col gap-3 z-50">
        <a target="_blank" href="https://www.instagram.com/developer_huzaifa" rel="noreferrer" className="p-3 bg-white dark:bg-[#1E112C] text-black dark:text-[#EBD3F8] brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:bg-yellow-400 dark:hover:text-black transition-all">
          <img src={insta.src || insta} alt="Instagram" className="w-5 h-5 dark:invert" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179" rel="noreferrer" className="p-3 bg-white dark:bg-[#1E112C] text-black dark:text-[#EBD3F8] brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:bg-yellow-400 dark:hover:text-black transition-all">
          <img src={lin.src || lin} alt="LinkedIn" className="w-5 h-5 dark:invert" />
        </a>
        <a target="_blank" href="https://github.com/Huzaifa-code" rel="noreferrer" className="p-3 bg-white dark:bg-[#1E112C] text-black dark:text-[#EBD3F8] brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:bg-yellow-400 dark:hover:text-black transition-all">
          <img src={gh.src || gh} alt="GitHub" className="w-5 h-5 dark:invert" />
        </a>
      </div>

    </div>
  );
}

export default Hero;