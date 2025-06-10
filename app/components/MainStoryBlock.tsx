"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "./SectionLabel";
import FreshDealsCard from "./SideBar/FreshDealsCard";
import TechStories from "./TechStories";
const stories = [
    {
      id: 1,
      title: "Apple Unveils M4 iPad Pro: Thinner, Faster, Smarter",
      img: "/mainStories/ipad3.png",
    },
    {
      id: 2,
      title: "Apple Unveils M4 iPad Pro: Thinner, Faster, Smarter",
      img: "/mainStories/ipad3.png",
    },
    {
      id: 3,
      title: "Apple Unveils M4 iPad Pro: Thinner, Faster, Smarter",
      img: "/mainStories/ipad3.png",
    },
  ];
  const styleItems = [
    {
      id: 1,
      title: "Style That Speaks",
      desc: "Enjoy hot deals on travel essentials, gadgets, fashion, and more — for a limited time only.",
      bgColor: "bg-[#C3FF9399]",
      textColor: "text-green-600",
      image: "/mainStories/style1.png",
    },
    {
      id: 2,
      title: "Style That Speaks",
      desc: "Express yourself with bold colors, textures, and smart styling.",
      bgColor: "bg-[#FF70AB33]",
      textColor: "text-pink-600",
      image: "/mainStories/style2.png",
    },
  ];
  
const MainStoryBlock = () => {
  return (
   <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
          {/* MAIN + TECH STORIES COLUMN */}
          <div className="lg:col-span-2 space-y-12">
            {/* MAIN STORY */}
            <div>
              <SectionLabel title="Main Stories" />
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex gap-4 w-1/2">
                  {stories.map((story) => (
                    <div key={story.id}>
                      <Image
                        src={story.img}
                        alt={story.title}
                        width={136}
                        height={141}
                        className="rounded-md"
                      /> <p className="text-xs mt-2 ml-4 w-[102] text-justify">{story.title}</p>
                    </div>
                    
                  ))}
                  
                </div>
                <div className="flex-1 mt-2 w-1/2">
                  <div className="p-4">
                    <h3 className="text-[32px] font-bold uppercase font-serif">
                      Top iPad stories
                    </h3>
                    <p className="text-[16px] text-gray-700 mt-2 font-inter">
                      Apple unveiled the M4 iPad Pro in May 2024, marking a
                      significant leap in tablet technology with its ultra-thin
                      design, advanced display, and powerful performance
                      capabilities.
                    </p>
                    <button className="text-xs mt-3 text-orange-500 underline">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TechStories/>
   
          </div>

          {/* SIDEBAR */}
        <FreshDealsCard/>
        </div>
   </section>
  )
}

export default MainStoryBlock