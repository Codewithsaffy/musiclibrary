"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

import React from "react";

function FeaturedWebinar() {
  const featuredWebinars = [
    {
      title: "Mastering Online Payments with Stripe",
      description:
        "Learn how Stripe's technology can streamline payment processes for your music school.",
      link: "https://stripe.com",
    },
    {
      title: "Creating Engaging Music Lessons with Netflix Techniques",
      description:
        "Discover how Netflix's content creation strategies can enhance your music lessons.",
      link: "https://netflix.com",
    },
    {
      title: "Enhancing Music Education with Google Tools",
      description:
        "Explore Google's suite of tools to support and innovate your music teaching methods.",
      link: "https://google.com",
    },
    {
      title: "Building a Connected Music Community with Meta",
      description:
        "Understand how Meta's platforms can help you build a vibrant, connected music community.",
      link: "https://meta.com",
    },
    {
      title: "Boosting Your Music School's Reach with Amazon",
      description:
        "Learn how Amazon's services can expand your music school's online presence and reach.",
      link: "https://amazon.com",
    },
    {
      title: "Leveraging Microsoft's Technology for Music Education",
      description:
        "Dive into Microsoft's tools and services to enhance your music education programs.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="flex flex-col p-2 pb-6 overflow-hidden bg-gray-900 justify-center items-center">
      <div className="text-center">
        <p className="dark:text-gray-500 font-semibold text-xl">
          Featured Webinar
        </p>
        <h1 className="text-4xl mt-4 font-bold darK:text-white">Webinar Title</h1>
      </div>
      <div>
        <HoverEffect items={featuredWebinars} />
      </div>
      <button className="bg-gradient-to-r mt-5 from-[#00ADB5] to-[#EEEEEE] mx-auto text-[#393E46] font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
  <Link href="https://www.youtube.com/watch?v=arSwho9EC-Q" target="_blank">Watch Now</Link>
</button>

    </div>
  );
}

export default FeaturedWebinar;
