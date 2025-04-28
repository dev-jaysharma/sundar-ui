"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Nextjs from "../svg/nextjs";
import Remix from "../svg/remix";
import TailwindCSS from "../svg/tailwind";
import Blob from "./blob";
import { Button } from "./button";
import Motion from "../svg/motion";

function Hero() {
  const MotionButton = motion.create(Button);
  return (
    <>
      <div className="flex flex-col h-[75vh] w-screen items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            <div className="mx-auto">
              Build
              <span> Mordern</span> <br />
            </div>
            <div className="relative w-full flex justify-center">
              <motion.svg
                className="absolute -mt-2" // Adjusted positioning
                width="601"
                height="16"
                viewBox="0 0 601 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  d="M1 1.99998C22.3333 2.66664 66.4 4.59998 72 6.99998C79 9.99998 112 -3.00002 123 1.99998C134 6.99998 157 6.99998 175 6.99998C193 6.99998 219 -2.00002 229 6.99998C237 14.2 265 9.99997 278 6.99998C293 6.99998 325.2 6.99998 334 6.99998C345 6.99998 371 12 377 6.99998C383 1.99998 406 6.99998 412 6.99998C418 6.99998 433 -3.00002 447 1.99998C461 6.99998 471 19 494 13C517 6.99998 518 1.99998 532 1.99998C546 1.99998 551 19 565 13C579 6.99998 576 12 600 6.99998"
                  stroke="#f5f5f4"
                  strokeWidth={3}
                />
              </motion.svg>
            </div>
            Beautiful Interfaces <br />
            Effortlessly
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.72,
            }}
            className={cn(
              `text-sm md:text-md lg:text-lg font-bold mx-auto text-stone-50 capitalize`
            )}
          >
            Sundar UI creates unforgettable user experiences empowers
            developers with a seamless, joyful building experience.
          </motion.div>
        </div>
        <div className="gap-4 flex flex-row mt-12">
          <MotionButton
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            variant={"secondary"}
            className="p-6 bg-gradient-to-br font-bold from-blue-500 via-blue-500 to-blue-600"
          >
            <motion.span>
              Browse Components
            </motion.span>
          </MotionButton>
          <MotionButton
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            variant={"outline"}
            className="p-6 font-bold"
          >
            <motion.span>
              View Docs
            </motion.span>
          </MotionButton>
        </div>
        {/* <Blob className="absolute top-56 left-10" /> */}
        <motion.div
          className="flex flex-col absolute bottom-12 justify-center items-center w-full gap-1"
        >
          <div className="flex flex-row justify-center items-center w-full gap-6">
            <div className="flex gap-4 items-center justify-center">
              <Nextjs />
              <span className="font-bold">Nextjs</span>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <TailwindCSS />
              <span className="font-bold">Tailwind</span>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Remix />
              <span className="font-bold">Tanstack Start</span>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Motion />
              <span className="font-bold">Motion</span>
            </div>
          </div>
          <motion.svg
            width="573"
            height="37"
            viewBox="0 0 573 37"
            fill="none"
            className="-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
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
