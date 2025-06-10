import React from "react";
import SectionLabel from "./SectionLabel";
import Image from "next/image";

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
const FashionStories = () => {
  return (
    <div>
      <section>
        <SectionLabel title="Fasion Stories" />

        {[0, 1].map((index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10  mt-10 ml-30 mr-30 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image and Arrows */}
            <div className="relative w-[379px] min-w-[379px] h-[491px]">
              <img
                src={`/fashionStory/fashion${index + 1}.png`}
                alt="Fashion Story"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Left Arrow (always) */}
              <button className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-8 h-8 bg-[#EAEAEA] rounded-full flex items-center justify-center shadow">
                ‹
              </button>

              {/* Right Arrow (always) */}
              <button className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-8 h-8 bg-[#EAEAEA] rounded-full flex items-center justify-center shadow">
                ›
              </button>
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 font-serif">
                STYLE GUIDE AND HOW TO POST
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Get inspired with our styling tips and outfit ideas designed to
                help you look and feel your best. From seasonal trends to
                classic essentials, our guide helps you express your style with
                confidence. Perfect for fashionistas who love to plan their
                posts.
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
      </section>
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
    </div>
  );
};

export default FashionStories;
