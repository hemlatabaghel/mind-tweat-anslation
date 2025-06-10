// components/FreshSidebar.tsx

import Image from "next/image";

const freshPosts = [
  {
    image: "/fresh-1.png",
    title: "Enjoy best deals on travel essentials, gadgets, fashion...",
    category: "TRAVEL",
    date: "June 1, 2024",
    author: "By Admin",
  },
  // Add more post objects here...
];

export default function FreshSidebar() {
  return (
    <aside className="bg-orange-50 p-4 rounded shadow-sm space-y-6">
      {/* Header */}
      <div className="bg-orange-200 px-3 py-2 font-bold text-sm text-orange-900 uppercase rounded-sm">
        🔥 Fresh
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-orange-300 rounded text-sm"
        />
        <span className="absolute right-3 top-2 text-orange-400">🔍</span>
      </div>

      {/* Fresh posts */}
      {freshPosts.map((post, idx) => (
        <div key={idx} className="flex space-x-3 bg-[#fffaf3] hover:bg-orange-100 p-3 rounded transition-all">
          <Image
            src={post.image}
            alt="fresh"
            width={60}
            height={60}
            className="object-cover rounded"
          />
          <div className="text-sm">
            <h4 className="font-semibold text-gray-800 leading-tight mb-1">{post.title}</h4>
            <div className="text-[11px] text-gray-500">
              <span className="uppercase">{post.category}</span> | {post.date} <br />
              {post.author}
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
