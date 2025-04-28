"use client";
import SplashScreen from "@/components/screens/splash";
import Hero from "@/components/ui/hero";
import { useState, useEffect } from "react";
import Navbar from "@/components/screens/navbar";


export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Set a timer to hide the splash screen after 3 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
    <Navbar />
      <div className="min-h-[90vh]">
        {loading ? <SplashScreen /> : <Hero/>}
      </div>
    </>
  );
}
