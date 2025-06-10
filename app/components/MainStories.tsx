"use client";

import SectionLabel from "./SectionLabel";
import Image from "next/image";
import { useState } from "react";

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

export default function MainStoriesSection() {
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(0);

  const filteredItems = freshItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

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

  // const story = techStories[activeIndex];

  // const handleSlideChange = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
    <section className="w-full bg-white py-6">
      <div className=" px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            {/* TECH STORIES {`/mainStories/tech${index + 1}.png`}  */}
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
          </div>

          {/* SIDEBAR */}
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
              <div className="flex items-center bg-[#FFF0D9] border border-[#B9B18D] rounded-lg overflow-hidden mb-4">
                <div className="bg-[#96A882] p-4 flex items-center justify-center rounded-l-lg">
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
                          <span className="text-lg">👜</span> Travel-ready gear
                          and accessories
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-lg">🌞</span> Must-have tech for
                          summer adventures
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-lg">🆕</span> New deals dropping
                          daily
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
        </div>
        {/* FASHION STORIESstyleItems */}
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
                  Get inspired with our styling tips and outfit ideas designed
                  to help you look and feel your best. From seasonal trends to
                  classic essentials, our guide helps you express your style
                  with confidence. Perfect for fashionistas who love to plan
                  their posts.
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
            Celebrating the most creative fashion — where classic designs never
            go out of style.
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
      </div>
    </section>
  );
}
