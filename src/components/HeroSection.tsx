import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="sm:h-screen h-[80vh] w-full rounded-md flex items-center justify-center antialiased relative overflow-hidden">
      <Spotlight
        fill="white"
        className="-top-40 left-0 md:left-40 md:-top-20"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="p-4 max-w-7xl flex flex-col justify-center items-center gap-6 mx-auto relative z-10 w-full md:mt-20 pt-16 md:pt-0 ">
        <h1 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-semibold text-4xl sm:5xl text-center md:text-6xl lg:text-7xl md:font-bold drop-shadow-lg leading-tight">
          Master the Art of Music
        </h1>
        <p className="text-center w-full md:w-[70%] lg:w-[60%] mt-4 text-[14px] md:text-[17px] font-normal text-white drop-shadow-md leading-relaxed">
          Dive into an immersive experience of musical excellence. Join us to
          explore diverse courses designed for all skill levels. Transform your
          passion for music into mastery, guided by industry professionals.
        </p>
        <Link href="/all-courses" className="mt-10">
          <Button
            borderRadius="2rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
