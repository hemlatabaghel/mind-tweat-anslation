"use client";

import { useState } from "react";
import Image from "next/image";
import { PromoCard } from "../components/common/PromoCard";

const images = [
  "/fashionStory/blog1.png",
  "/fashionStory/blog2.png",
  "/fashionStory/blog3.png",
];

const blogPosts = [
  {
    title: "DRESS SHABBILY AND THEY REMEMBER THE DRESS",
    excerpt:
      "From runway reports to real-world street style, our fashion lens captures identity, influence, and the ever-changing face .",
  },
  {
    title: "THE LANGUAGE OF FASHION IS EVOLVING",
    excerpt:
      "Dive into the shifting trends that define personal style and challenge norms across seasons and cities.",
  },
  {
    title: "STREET STYLE THAT SPEAKS LOUDER",
    excerpt:
      "Photographers around the globe are capturing how everyday people make bold fashion statements.",
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
export default function BlogPost() {
  const [current, setCurrent] = useState(0);
  // const [current, setCurrent] = useState(0);
  // const images = promoImages[id];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-10 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Image */}
        <div className="lg:col-span-5 relative">
          <Image
            src={images[current]}
            alt="Blog Post"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            ›
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-4">
          <h2 className="text-lg md:text-xl font-serif font-semibold leading-snug">
            {blogPosts[0].title}
          </h2>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {blogPosts[0].excerpt}
          </p>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {blogPosts[0].excerpt}
          </p>

          <div className="flex items-center gap-2 justify-center mt-4 md:justify-start">
            <button className="text-gray-500 font-bold text-lg font-serif">
              READ MORE
            </button>
            <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
          </div>
          <div className="flex-1 h-px bg-[#3F4E4F66] max-w-[368px] mt-8 mb-8"></div>
          <h2 className="text-lg md:text-xl font-serif font-semibold leading-snug">
            {blogPosts[0].title}
          </h2>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {blogPosts[0].excerpt}
          </p>

          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center gap-2 justify-center mt-4 md:justify-start">
            <button className="text-gray-500 font-bold text-lg font-serif">
              READ MORE
            </button>
            <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
          </div>
        </div>

        {/* Promo Cards */}
       
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
      </div>
    </div>
  );
}
