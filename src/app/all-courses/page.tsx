import React from "react";
import Data from "@/data/music.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-zinc-900 py-32">
      <div className="text-4xl font-extrabold dark:text-white mb-10">
        All Courses{" "}
        <span className="text-emerald-500">({Data.courses.length})</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {Data.courses.map((course, index) => {
          return (
            <CardContainer key={index} className="inter-var">
              <CardBody key={index} className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transform transition duration-500 hover:scale-105">
                <CardItem 
                  key={index}
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white text-center"
                >
                  {course.title}
                  <span className="text-sm ml-2 font-normal text-neutral-400">{`( by ${course.instructor} )`}</span>
                                  </CardItem>
                <CardItem
                key={index}
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl   dark:text-orange-400 text-sm font-bold   text-white hover:bg-emerald-600 transition duration-300"
                  >
                   {course.price} $
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                  >
                    Buy Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
