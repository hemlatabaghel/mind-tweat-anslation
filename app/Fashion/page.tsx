import React from "react";
import SectionLabel from "../components/SectionLabel";
import FashionSlider from "../components/common/FashionSlider";
import Image from "next/image";
import BlogPost from "./BlogPost";
import RecipeGrid from "../components/RecipeGrid";

const fashionData = [
  {
    image: "/fashionStory/f-slide1.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide3.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide4.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
  {
    image: "/fashionStory/f-slide2.png",
    text: "From layering essentials to seasonal must-haves, we break down the latest looks and show you how to make them your own — using pieces from our collection. Perfect for fashion newbies and style pros alike.",
  },
];

const Fashion = () => {
  return (
    <>
      <section>
        <SectionLabel title="Fasion Stories" />
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-8`}
        >
          {/* Image and Arrows */}
          <div className="relative w-[379px] min-w-[379px] h-[491px] mb-8">
            <img
              src={`/fashionStory/fashion1.png`}
              alt="Fashion Story"
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-[20px] ml-4 mt-2 font-serif text-justify">
              STYLE ACCORDING TO YOUR MOOD
            </p>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              STYLE GUIDE AND HOW TO POST
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Get inspired with our styling tips and outfit ideas designed to
              help you look and feel your best. From seasonal trends to classic
              essentials, our guide helps you express your style with
              confidence. Perfect for fashionistas who love to plan their posts.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <button className="text-gray-500 font-bold text-lg font-serif">
                READ MORE
              </button>
              <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
            </div>
          </div>
        </div>
        <FashionSlider items={fashionData} />

        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-8`}
        >
          {/* Image and Arrows */}
          <div className="relative w-[379px] min-w-[379px] h-[491px] mb-8">
            <img
              src={`/fashionStory/fashion2.png`}
              alt="Fashion Story"
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-[20px] ml-4 mt-2 font-serif text-justify">
              STYLE ACCORDING TO YOUR MOOD
            </p>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              STYLE GUIDE AND HOW TO POST
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Get inspired with our styling tips and outfit ideas designed to
              help you look and feel your best. From seasonal trends to classic
              essentials, our guide helps you express your style with
              confidence. Perfect for fashionistas who love to plan their posts.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <button className="text-gray-500 font-bold text-lg font-serif">
                READ MORE
              </button>
              <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
            </div>
          </div>
        </div>
        <FashionSlider items={fashionData} />
      </section>

      <section className="py-12 px-4 md:px-20">
        {/* Header Image and Title */}
        <div className="relative mb-8 max-w-5xl mx-auto">
          <Image
            src="/fashionStory/f-girls.png"
            alt="Luxury Header"
            width={1036}
            height={442}
            className="rounded-md mx-auto w-full max-w-full object-cover"
          />
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center text-lg sm:text-xl md:text-3xl font-serif font-semibold px-4">
            EXPERIENCE THE EPITOME OF REFINEMENT – LUXURY FASHION REDEFINED
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-xxl mx-auto text-justify text-sm md:text-base text-gray-800 space-y-4">
          <p>
            Get inspired with our expert styling tips and outfit ideas designed
            to help you look and feel your best. Whether you're dressing for a
            special occasion, curating a capsule wardrobe, or learning how to
            mix textures and prints, our step-by-step guides make fashion easy
            and approachable.
          </p>
          <p>
            From layering essentials to seasonal must-haves, we break down the
            latest looks and show you how to make them your own — using pieces
            from our collection.
          </p>
        </div>
      </section>

      <BlogPost />
      <RecipeGrid />
    </>
  );
};

export default Fashion;
