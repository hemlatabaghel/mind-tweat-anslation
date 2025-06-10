"use client";
import React from 'react'
import SectionLabel from './SectionLabel'
import Image from 'next/image'
import { useState } from "react";

const RecipeGrid = () => {
    const [search, setSearch] = useState("");
  return (
    <section className="bg-white py-16 px-4">
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* === LEFT CONTENT === */}
      <div className="lg:col-span-9">
        <SectionLabel title="EXPERIENCE IT" />
        <p className="text-gray-700 mb-4 mt-10">
          Step into the heart of the home with our curated cooking content
          — where delicious ideas come to life. Whether you're a beginner
          in the kitchen or a seasoned home chef, you'll find
          easy-to-follow recipes, time-saving hacks, and smart kitchen
          tips that turn everyday meals into memorable moments.
        </p>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <button className="text-gray-500 font-bold text-lg font-serif">
            READ MORE
          </button>
          <div className="flex-1 h-px bg-orange-300 max-w-[160px]"></div>
        </div>

        {/* === GRID OF RECIPE CARDS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#ECF4C8] p-4 rounded-md">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="relative h-56 rounded-md overflow-hidden shadow-md group"
              >
                <img
                  src={`/EX/recipe${i + 1}.png`} // <-- Use your actual image paths
                  alt={`Recipe ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="/EX/vectorVedio.png"
                      alt="Play"
                      className="w-4 h-4 "
                    />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow-md">
                  Where Every Recipe Tells a Story
                </div>
              </div>
            ))}
        </div>

        {/* === PAGINATION DOTS === */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2, 3, 4].map((d, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 2 ? "bg-gray-900" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* === SIDEBAR === */}
      <aside className="lg:col-span-3 bg-[#FFF7EE] p-4 rounded-xl border border-dashed border-orange-200 shadow-sm">
        {/* Title with Icon */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src="/mainStories/freshicon.gif"
            alt="Fresh Icon"
            className="w-5 h-5"
            width={31}
            height={31}
          />{" "}
          {/* Replace with correct icon path */}
          <h3 className="text-[#FF6B00] font-semibold text-xl">FRESH!</h3>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#FFF0D9] border border-[#B9B18D] rounded-lg overflow-hidden mb-4">
          <div className="bg-[#96A882] p-2 flex items-center justify-center rounded-l-lg">
            <img
              src="/mainStories/search.gif"
              alt="Search"
              className="w-6 h-6"
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 bg-[#FFF0D9] text-sm focus:outline-none"
          />
        </div>

        {/* Promo Cards */}
        <div className="space-y-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className=" px-3 py-2  border-b-1 border-[#D9D9D980]   flex gap-3"
              >
                <img
                  src={`/EX/ex_${i + 1}.png`} // Update with actual promo images
                  alt={`Promo ${i + 1}`}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex flex-col justify-between text-[12px]">
                  <p className="text-[#FF6B00] font-semibold leading-snug">
                    Enjoy hot deals on travel essentials, gadgets,
                    fashion, and more —{" "}
                    <span className="font-bold">
                      for a limited time only.
                    </span>
                  </p>
                  <ul className="text-[11px] text-gray-600 mt-1 list-disc list-inside space-y-0.5 leading-snug">
                    <li>Save up to 60%</li>
                    <li>Limited-time offers</li>
                    <li>Free shipping available</li>
                  </ul>
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

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-1">
          {[0, 1, 2].map((d, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-[#FF6B00]" : "bg-orange-200"
              }`}
            ></span>
          ))}
        </div>
      </aside>
    </div>
  </section>
  )
}

export default RecipeGrid