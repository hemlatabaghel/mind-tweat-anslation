"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchInput";

const freshItems = [
  {
    id: 1,
    title:
      "Enjoy hot deals on travel essentials, gadgets, fashion, and more — for a limited time only.",
    image: "/mainStories/fresh1.png",
  },
  {
    id: 2,
    title: "Up to 50% off accessories and more this summer",
    image: "/mainStories/fresh2.png",
  },
  {
    id: 3,
    title: "Must-have tools for your next adventure",
    image: "/mainStories/fresh3.png",
  },
  {
    id: 4,
    title: "Shop now for exclusive limited-time offers",
    image: "/mainStories/fresh4.png",
  },
  {
    id: 5,
    title: "Must-have tools for your next adventure",
    image: "/mainStories/fresh3.png",
  },
  {
    id: 6,
    title: "Enjoy hot deals on travel essentials, gadgets, fashion...",
    image: "/mainStories/fresh1.png",
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

const FreshDealsCard = () => {
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(0);
  const filteredItems = freshItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <aside className="space-y-8">
      {/* Fresh Section */}
      <div className="bg-[#FFF6E9] p-4 border border-[#FAD9A0] rounded-md">
        {/* Header with icon and text */}
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/mainStories/freshicon.gif"
            alt="Sunflower Icon"
            width={24}
            height={24}
            className="rounded"
          />
          <h4 className="text-[20px] font-serif text-[#F75402] font-bold">
            FRESH
          </h4>
        </div>

        {/* Search Input */}
        <SearchInput />

        <div className="flex flex-col gap-6">
          {filteredItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#FFEFD8] rounded-md p-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between text-[13px] text-[#265C4B]">
                <h5 className="text-[15px] font-bold text-[#2B4C3E] leading-snug">
                  {item.title}
                </h5>
                <ul className="list-none space-y-1 mt-1">
                  <li className="flex items-start gap-1">
                    <span className="text-lg">🔺</span> Up to 50% off
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-lg">👜</span> Travel-ready gear and
                    accessories
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-lg">🌞</span> Must-have tech for
                    summer adventures
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-lg">🆕</span> New deals dropping daily
                  </li>
                </ul>
                <button className="self-start mt-2 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-sm">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {freshItems.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentSlide ? "bg-orange-500" : "bg-orange-200"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Style That Speaks Slider */}
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`${styleItems[currentStyle].bgColor} p-4 border rounded-md`}
        >
          <h4
            className={`text-[32px] font-serif uppercase ${styleItems[currentStyle].textColor} mb-2`}
          >
            {styleItems[currentStyle].title}
          </h4>
          <Image
            src={styleItems[currentStyle].image}
            alt={styleItems[currentStyle].title}
            width={134}
            height={134}
            className="rounded-md mb-2"
          />
          <p className="text-xs text-gray-600 mb-2">
            {styleItems[currentStyle].desc}
          </p>
          <button className="text-xs mt-2 text-orange-500 underline">
            Explore Now
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {styleItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStyle ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrentStyle(index)}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FreshDealsCard;
