"use client";

import Image from "next/image";
import { useRef } from "react";

interface SliderItem {
  image: string;
  text: string;
}

interface FashionSliderProps {
  items: SliderItem[];
  leftArrow?: string;
  rightArrow?: string;
}

export default function FashionSlider({
  items,
  leftArrow = "/icons/Group.png",
  rightArrow = "/icons/Arrow.png",
}: FashionSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full px-4 md:px-10 py-10">
      <div className="relative max-w-screen-xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
        >
          <Image src={leftArrow} alt="left" width={28} height={28} className="rotate-180" />
        </button>

        {/* Scrollable Items */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] xl:w-[320px] rounded-xl"
            >
              <div className="w-full h-[420px] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={item.image}
                  alt={`Fashion ${idx + 1}`}
                  width={320}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-justify px-1 leading-relaxed text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
        >
          <Image src={rightArrow} alt="right" width={28} height={28} />
        </button>
      </div>
    </section>
  );
}
