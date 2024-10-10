import { Meteors } from "@/components/ui/meteors";
import React from "react";

function Page() {
  return (
    <div className="flex relative items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
       <Meteors number={20} />
      <form action="" className="w-full max-w-lg mt-36 z-20 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 mb-2">Username</label>
          <input 
            id="username" 
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
            type="text" 
            placeholder="Username" 
            name="username" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input 
            id="email" 
            type="email" 
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
            placeholder="Email" 
            name="email" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
          <textarea 
            id="message" 
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" 
            placeholder="Message" 
            name="message" 
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
