"use client";

import { useState } from "react";
import Image from "next/image";

interface PromoCardProps {
  images: string[];
  bgColor: string;
  imageRight?: boolean;
  responsive?: boolean;
}

export function PromoCard({ images, bgColor, imageRight = false, responsive = false }: PromoCardProps) {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={`p-4 rounded-xl border border-gray-200 ${bgColor}`}>
      <h3 className="font-serif text-lg font-bold mb-4">STYLE THAT SPEAKS</h3>
      <div
        className={`flex items-start gap-4 ${responsive ? "flex-col sm:flex-row" : ""} ${imageRight ? "sm:flex-row-reverse" : ""}`}
      >
        <div className="flex-shrink-0">
          <Image
            src={images[current]}
            alt={`Promo ${current + 1}`}
            width={134}
            height={134}
            className="rounded-md object-cover"
          />
          <div className="flex justify-center gap-2 mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === current ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-black mb-2 leading-snug">
            Enjoy hot deals on travel essentials, gadgets, fashion, and more — for a limited time only.
          </p>
          {/* <ul className="text-xs text-black list-none ml-5 space-y-1">
            <li> 🏖️ Up to 50% off</li>
            <li>🧳 Travel-ready gear and accessories</li>
            <li>📱 Must-have tech for summer adventures</li>
            <li>  🎉 New deals dropping daily!</li>
          </ul> */}
           <ul className="list-none space-y-1 mt-1 text-[8px]">
                  <li className="flex items-start gap-1">
                    <span className="text-sm">🔺</span> Up to 50% off
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-sm">👜</span> Travel-ready gear and
                    accessories
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-sm">🌞</span> Must-have tech for
                    summer adventures
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-sm">🆕</span> New deals dropping daily
                  </li>
                </ul>
          <button className="text-xs mt-3 bg-orange-400 text-white px-3 py-1 rounded shadow">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
