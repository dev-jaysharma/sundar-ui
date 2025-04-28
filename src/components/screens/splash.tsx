"use client"

import React from "react";
import ShuffleText from "../ui/ShuffleText";
import { motion } from "motion/react";

function SplashScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
        display: "none",
      }}
      transition={{
        delay: 1.5,
        duration: 1,
      }}
          className=" absolute flex h-[90vh] justify-center items-center w-full bg-stone-950 z-[100000000]"
    >
      <ShuffleText className="font-maz text-5xl italic text-blue-400" duration={1000} speed={60}>
        Sundar-UI
      </ShuffleText>
    </motion.div>
  );
}

export default SplashScreen;
