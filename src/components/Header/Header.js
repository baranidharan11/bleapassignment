import React from "react";
import orgknowLogo from "../../assets/logo/orgknowLogo.svg";

export default function Header() {
  return (
    <div className="bg-[#153C3B] flex justify-between items-center py-[2px] px-[180px] border-b-[0.47px] border-white sticky top-0 z-50">
      <img alt="orgaknow" src={orgknowLogo} />
      <div className="flex text-white">
        <div className="ml-[46px]">Our Partner</div>
        <div className="ml-[46px]">Why Orgaknow</div>
        <div className="ml-[46px]">Pricing</div>
        <div className="ml-[46px]">FAQ</div>
      </div>
    </div>
  );
}
