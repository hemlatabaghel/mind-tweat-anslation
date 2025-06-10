"use client";
import React from "react";
import SectionLabel from "./SectionLabel";
import Image from "next/image";
import { useState } from "react";

const GreenCardGallery = () => {
  const [search, setSearch] = useState("");
  const cards = [
    {
      id: 1,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      image: "/fashionStory/f1.png", // Place your image inside public/images/
    },
    {
      id: 2,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      subtitle: "Fashion Meets Vintage. Always in style.",
      image: "/fashionStory/f2.png",
    },
    {
      id: 3,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      subtitle: "Fashion Meets Vintage. Always in style.",
      image: "/fashionStory/f3.png",
    },
    {
      id: 4,
      title: "Conquer The Trails: Finding The Perfect Men’s Hiking Footwear",
      image: "/fashionStory/f4.png",
    },
  ];
  return (
    <section className="relative py-24 px-4 bg-white text-center">
      <h2 className="text-pink-600 text-[32px] font-serif uppercase tracking-wide">
        Experience the Epitome of Refinement – Luxury Fashion Redefined
      </h2>
      <p className="text-gray-600 mt-2  text-base font-inter">
        Celebrating the most creative fashion — where classic designs never go
        out of style.
      </p>

      {/* LIME GREEN BACKGROUND BAR */}
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[1298px] h-[207px] bg-[#C3FF93] rounded-md z-0 shadow-lg" />

      {/* CARD LIST */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-start relative">
            {/* TOP TEXT SECTION ON GREEN BAR */}
            <div className="flex items-start gap-2 px-2 pt-4 pb-2">
              <div className="text-sm font-medium text-gray-900 leading-snug text-left">
                <p className="max-w-[190px]">{card.title}</p>
              </div>
              <div className="mt-1">
                <Image
                  src="/fashionStory/f-arrow.gif"
                  alt="Arrow"
                  width={50}
                  height={50}
                  // className="w-4 h-4"
                />
              </div>
            </div>

            {/* IMAGE SECTION OVERLAPPING GREEN BACKGROUND */}
            <div className="mt-[-4px] relative w-full h-52 rounded-lg overflow-hidden shadow-md">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreenCardGallery;
