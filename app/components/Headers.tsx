import Link from "next/link";
import { FaBars } from "react-icons/fa";
// import .
import Image from "next/image";
const navItems = [
  "Home",
  "Latest",
  "Tech",
  "Food",
  "Entertainment",
  "Health",
  "Money",
  "Deals",
  "Home & Garden",
  "Hacks",
  "Fashion",
];

const socialIcons = [
  { src: "/icons/facebook.png", alt: "Facebook" },
  { src: "/icons/instagram.png", alt: "Instagram" },
  { src: "/icons/x.png", alt: "X" },
  { src: "/icons/twitter.png", alt: "Twitter" },
  { src: "/icons/youtube.png", alt: "YouTube" },
  // { src: "/icons/email.gif", alt: "Email" },
  // { src: "/icons/menu.png", alt: "Menu" },
];
export default function Header() {
    return (
      <header className="w-full border-b border-gray-100 font-serif">
      {/* Top Logo + Icons */}
      <div className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-tight text-black">MIND TWEAT</h1>

        {/* Social Icons with PNGs */}
        <div className="flex gap-3 items-center">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center bg-[#D9D9D933] border border-[#C7FF82] rounded-[10px] hover:bg-gray-50 transition"
            >
              <Image src={icon.src} alt={icon.alt} width={20} height={20} />
            </div>
          ))}
          {/* Pink Email */}
          <div className="w-10 h-10 flex items-center justify-center bg-pink-400 rounded-[10px] border border-[#C7FF82]">
          <Image src="/icons/email.gif" alt="email" width={52} height={52} />
          </div>
          {/* Pink Menu */}
          <div className="w-10 h-10 flex items-center justify-center bg-pink-400 rounded-[10px] border border-[#C7FF82]">
          <FaBars className="text-white" size={16} />
          </div>
        </div>
        
      </div>

      {/* Navigation */}
      {/* <nav className="flex justify-center border-t border-b py-3 font-semibold text-sm"> */}
      <nav className="flex justify-between items-center px-8 py-6 font-semibold text-sm">
        <ul className="flex flex-wrap justify-center gap-4 uppercase font-semibold text-[14px] leading-[100%]">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ & /g, "-")}`}
                className={`hover:text-pink-600 transition-colors ${
                  item === "Home" ? "text-pink-600" : "text-black"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    );
  }
  