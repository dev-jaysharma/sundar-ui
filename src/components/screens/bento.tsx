"use client";

import { cn } from "@/lib/utils";
import { animate } from "motion";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

function Bento() {
  return (
    <div className="grid grid-cols-12 mx-auto max-w-4xl absolute left-52 top-52 grid-flow-dense gap-4">
      <BentoChild className="col-span-4 row-span-6 font-new text-4xl flex items-center justify-center ">
        <motion.span
        initial={{}}
        animate={{
          rotate: -5,
          top:1,
          left:1
        }}
        transition={{delay:3 , duration:2}}
        className=" -rotate-1 flex justify-center flex-col items-center ">
          Sundar_Ui{" "}
          <svg
            width="205"
            height="23"
            viewBox="0 0 205 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 3,
                duration: 1,
              }}
              d="M1 15C29 24 63.2 -11.6 84 5.99999C110 28 121 24 149 15C173.8 3.79999 196 4.33333 204 5.99999"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        </motion.span>
      </BentoChild>
      <BentoChild />
      <BentoChild />
      <BentoChild />
      <BentoChild />
      <BentoChild />
      <BentoChild />
      <BentoChild />
    </div>
  );
}

type childProps = {
  children?: ReactNode;
  className?: string;
};

function BentoChild({ children, className }: childProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg bg-zinc-800 border border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Bento;
