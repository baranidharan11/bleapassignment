import React from "react";
import DotIcon from "../../assets/logo/Dot.svg";
import abstract from "../../assets/images/homeAbstract.svg";

export default function Home() {
  return (
    <div
      className="bg-primary-color "
      style={{ background: "url('../../assets/images/grid.svg')" }}
    >
      <div>
        <HeroSection />
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="bg-primary-color h-without-header flex items-center justify-between pl-[180px] relative">
      <div className="text-white space-y-4 max-w-lg">
        <GlowingBadge />
        <div className="text-4xl font-bold leading-snug text-left">
          Master HR Analytics and AI with Orgaknow Academy!
        </div>
        <div className="text-left">
          Upskill, Certify, and Lead with Data-Driven HR Strategies.
        </div>
        <button className="mt-4 bg-white text-teal-900 py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">
          Register now!
        </button>
      </div>

      <div className="flex-shrink-0 pr-[180px]">
        <img alt="Abstract" src={abstract} className="w-[600px]" />
      </div>
    </div>
  );
};

const GlowingBadge = () => {
  return (
    <div class="bg-gradient-to-r from-[#153C3B] via-[#4A8786] to-[#153C3B] border-[1.17px] border-gradient-to-r from-[rgb(74, 147, 146)] to-transparent shadow-[0px_4.67px_37.33px_2.33px_rgba(25,114,111,1)] rounded-[116px] text-center w-[190px] h-[36px] font-bold flex items-center justify-center">
      <img alt="dot" src={DotIcon} class="mr-[8px]" />
      Master HR with AI!
    </div>
  );
};
