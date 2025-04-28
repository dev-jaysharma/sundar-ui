"use client";

import { cn } from "@/lib/utils";
import {motion} from "motion/react"
import React from "react";

type props ={
    className ?: string
}

function Blob({className} :props) {
  return (
    <motion.div
      initial={{ scale: 2 }}
      animate={{ scale: 4 }}
      //   exit={{scale:2 }}
      transition={{
        repeat: Infinity,
        ease: "circOut",
        duration: 3,
        repeatType: "reverse",
      }}
      className={cn(
        "h-20 w-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full blur-2xl" , className
      )}
    ></motion.div>
  );
}

export default Blob;
