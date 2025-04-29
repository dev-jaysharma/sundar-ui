"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Nextjs from "../svg/nextjs";
import Remix from "../svg/remix";
import TailwindCSS from "../svg/tailwind";
import Motion from "../svg/motion";
import { Button } from "./button";

function Hero() {
  const MotionButton = motion.create(Button);

  return (
    <>
      <div className="flex flex-col min-h-[75vh] w-full items-center justify-center px-4 py-8 overflow-hidden">
        <div className="text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:0,
              duration: 0.5,
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            <div className="mx-auto">
              Build
              <span className="inline sm:inline"> Modern</span>
            </div>
            <div className="relative w-full flex justify-center"></div>
            <div className="leading-tight">
              Beautiful Interfaces <br className="hidden xs:inline md:inline" />
              Effortlessly
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:0,
              duration: 0.72,
            }}
            className={cn(
              "text-xs sm:text-sm md:text-md lg:text-lg mx-auto text-stone-50 capitalize max-w-2xl"
            )}
          >
            Sundar UI creates unforgettable user experiences
            <br className="hidden sm:inline" /> empowers developers with a
            seamless, joyful building experience.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="gap-3 md:gap-4 flex flex-col sm:flex-row mt-8 md:mt-12"
        >
          <MotionButton
            whileTap={{ scale: 0.7 }}
            // whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            variant={"secondary"}
            className="z-10 p-4 md:p-6 bg-gradient-to-br font-bold from-blue-500 via-blue-500 to-blue-600 text-sm sm:text-base"
          >
            <motion.span>Browse Components</motion.span>
          </MotionButton>
          <MotionButton
            whileTap={{ scale: 0.7 }}
            // whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            variant={"outline"}
            className="p-4 md:p-6 font-bold text-sm sm:text-base "
          >
            <motion.span>View Docs</motion.span>
          </MotionButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="flex flex-col mt-12 absolute bottom-6 lg:absolute lg:bottom-12 justify-center items-center w-full gap-1"
        >
          <div className="flex flex-wrap justify-center items-center w-full gap-4 md:gap-6 px-4">
            <div className="flex gap-2 sm:gap-4 items-center justify-center">
              <Nextjs />
              <span className="hidden md:flex text-xs sm:text-sm font-bold">
                Nextjs
              </span>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center justify-center">
              <TailwindCSS />
              <span className="hidden md:flex text-xs sm:text-sm font-bold">
                Tailwind
              </span>
            </div>
            <div className=" flex gap-2 sm:gap-4 items-center justify-center">
              <Remix />
              <span className=" hidden md:flex  text-xs sm:text-sm font-bold">
                Tanstack Start
              </span>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center justify-center">
              <Motion />
              <span className=" hidden md:flex text-xs sm:text-sm font-bold">
                Motion
              </span>
            </div>
          </div>

          <motion.svg
            width="100%"
            height="37"
            viewBox="0 0 573 37"
            fill="none"
            className="-translate-y-1 max-w-3xl hidden md:flex"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay:0.4,
                duration: 3,
                ease: "easeInOut",
              }}
              d="M1 15C28.3333 10 65.7999 -11.4144 97 24.5856C128.2 60.5857 176.799 -1.26981 205 15C257 45.0001 296 -8.7734 326 15C356 38.7734 410.832 -21.8177 451 15C482 43.4144 537 -12 572 4.00004"
              stroke="#4F64FF"
              strokeWidth={3}
            />
          </motion.svg>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
