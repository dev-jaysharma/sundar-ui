"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Github } from "lucide-react";
// import SundarLogo from "@/components/sundar-logo";

export default function Navbar() {
  const MotionButton = motion.create(Button)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-screen flex items-center justify-center px-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="./logo.png" className="h-10" alt="" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/component"
            className="text-sm font-medium hover:text-blue-500 hover:font-bold transition-colors"
          >
            Components
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium hover:text-blue-500 hover:font-bold transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-blue-500 hover:font-bold transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-500 hover:font-bold transition-colors"
          >
            About
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link
            href="https://github.com/sundar-ui/sundar-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MotionButton
            whileHover={{
              rotate:1,
              scale:1.1
            }}
            transition={{
              duration:0.3 ,
              type:"spring"
            }}
              size="sm"
              variant={"outline"}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Github />
              Github
            </MotionButton>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/component"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex gap-4 pt-2">
              <Link href="/docs" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm">
                  Documentation
                </Button>
              </Link>
              <Link
                href="https://github.com/sundar-ui/sundar-ui"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                  GitHub
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
