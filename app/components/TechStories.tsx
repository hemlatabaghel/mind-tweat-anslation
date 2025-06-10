"use client";

import React from 'react'
import SectionLabel from './SectionLabel'
import { useState } from "react";
import Image from "next/image";

const techStories = [
    {
      title: "DATA INFRASTRUCTURE AND ANALYTICS",
      description:
        "Data Infrastructure and Analytics refers to the combination of technologies, processes, and frameworks that enable organizations to collect, store, manage, process, and analyze data to extract meaningful insights and support data-driven decision-making.",
      image: "/mainStories/tech1.png",
    },
    {
      title: "REAL-TIME COLLABORATION TOOLS",
      description:
        "Real-time tools empower teams to work simultaneously on shared projects, increasing productivity and improving communication across time zones.",
      image: "/mainStories/tech2.png",
    },
    {
      title: "VISUAL DATA REPRESENTATION",
      description:
        "Visualizing data allows stakeholders to quickly understand patterns and make more informed decisions without needing to parse raw numbers.",
      image: "/mainStories/tech3.png",
    },
  ];

const TechStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? techStories.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === techStories.length - 1 ? 0 : prevIndex + 1
        );
      };
  return (
    <div>
    <SectionLabel title="Tech Stories" />

    <div className="flex flex-col gap-20">
      {techStories.map((story, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 relative ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-[50%] h-[406px] flex items-center justify-center">
            {/* Orange Background */}
            <div className="absolute w-[444px] h-[245px] bg-[#FFD18E] rounded-2xl z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Image */}
            <div className="relative w-[363px] h-[406px] z-10">
              <Image
                src={story.image}
                alt="Tech Story Image"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>

            {/* Slider Dots & Arrows */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-white">
                ‹
              </button>
              {techStories.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === activeIndex
                      ? "bg-orange-400"
                      : "bg-gray-300"
                  }`}
                ></span>
              ))}
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white">
                ›
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-[50%] text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              {story.title}
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              {story.description}
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <button className="text-gray-500 font-bold text-lg font-serif">
                READ MORE
              </button>
              <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TechStories