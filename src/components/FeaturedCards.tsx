"use client";
import React from "react";
import musicData from "@/data/music.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

interface Courses {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
}

function FeaturedCards() {
  function isFeatured(): Courses[] {
    return musicData.courses.filter(
      (course: Courses) => course.isFeatured === true
    );
  }
  return (
    <div className="flex flex-col items-center py-4 sm:py-10  justify-center w-full bg-gray-900 px-1 sm:px-2 md:px-3 lg:px-4">
      <div className=" text-center">
        <p className="text-xl dark:text-gray-600 font-semibold mt-2">
          {" "}
          Featured
        </p>
        <h1 className="text-4xl font-bold darK:text-white">Fun with Music</h1>
      </div>
      <div className="flex flex-wrap mt-5 gap-7 items-center flex-shrink justify-center place-items-center">
        {isFeatured().map((course: Courses) => (
          <BackgroundGradient key={course.id} className="flex">
            <div className="bg-white dark:bg-zinc-900 rounded-[22px] items-center justify-center shadow-lg overflow-hidden w-80 sm:w-96 flex-shrink  max-w-md h-96 flex flex-col p-4 ">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt={course.title}
                width={300}
                height={300}
                className="rounded-md w-full h-48 object-cover mb-4"
              />
              <h1 className="text-xl items-start  font-bold mb-2">
                {course.title}
              </h1>
              <p className="text-sm text-center  dark:text-gray-300 font-medium mb-4">
                {course.description}
              </p>
              <button className="bg-blue-500 mx-auto  text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-40  duration-300">
                Learn More
              </button>
            </div>
          </BackgroundGradient>
        ))}
      </div>
<Link href={"/all-courses"}>
      <button className="bg-gradient-to-r mt-5 from-[#00ADB5] to-[#EEEEEE] mx-auto text-[#393E46] font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
  View All
</button>
</Link>
    </div>
  );
}

export default FeaturedCards;
