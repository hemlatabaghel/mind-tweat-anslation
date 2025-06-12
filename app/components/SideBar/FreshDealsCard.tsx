"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { PromoCard } from "../common/PromoCard";

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
const promoSet1 = [
  "/mainStories/style1.png",
  "/mainStories/fresh1.png",
  "/mainStories/fresh2.png",
];
const promoSet2 = [
  "/mainStories/style2.png",
  "/mainStories/fresh3.png",
  "/mainStories/fresh4.png",
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
      <div className="lg:col-span-3 space-y-4">
          <PromoCard
            images={promoSet1}
            bgColor="bg-lime-100"
            imageRight={false}
            responsive={true}
          />
          <PromoCard
            images={promoSet2}
            bgColor="bg-pink-100"
            imageRight={false}
            responsive={true}
          />
        </div>
    </aside>
  );
};

export default FreshDealsCard;
