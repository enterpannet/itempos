"use client";
import React, { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
const SideBar: React.FC = () => {
  const [isOverview, setIsOverview] = useState<boolean>(false);
  const [isCustomers, setIsCustomers] = useState<boolean>(false);
  const [isSettings, setIsSettings] = useState<boolean>(false);
  const [isMessages, setIsMessages] = useState<boolean>(false);
  return (
    <div className="w-[270px] h-[960px] flex flex-col justify-between bg-white drop-shadow-md">
      <div>
        <div
          className="flex items-center gap-7 justify-start text-xl cursor-pointer group hover:bg-green-200  "
          onMouseEnter={() => setIsOverview(true)}
          onMouseLeave={() => setIsOverview(false)}
        >
          <div
            className={`bg-gradient-to-b from-emerald-500 to-lime-300 h-[58px] text-emerald-400 rounded-2xl ${
              isOverview ? "opacity-100" : "opacity-0"
            }`}
          >
            .
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <CiViewList color={isOverview ? "#2CC56F" : "#80828A"} />
              <h1 className="text-[#80828A] group-hover:text-[#2CC56F]">
                Overview
              </h1>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-7 justify-start text-xl cursor-pointer group hover:bg-green-200 "
          onMouseEnter={() => setIsCustomers(true)}
          onMouseLeave={() => setIsCustomers(false)}
        >
          <div
            className={`bg-gradient-to-b from-emerald-500 to-lime-300 h-[58px] text-emerald-400 rounded-2xl ${
              isCustomers ? "opacity-100" : "opacity-0"
            }`}
          >
            .
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <AiOutlineUser color={isCustomers ? "#2CC56F" : "#80828A"} />
              <h1 className="text-[#80828A] group-hover:text-[#2CC56F]">
                Customers
              </h1>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-7 justify-start text-xl cursor-pointer group hover:bg-green-200 "
          onMouseEnter={() => setIsSettings(true)}
          onMouseLeave={() => setIsSettings(false)}
        >
          <div
            className={`bg-gradient-to-b from-emerald-500 to-lime-300 h-[58px] text-emerald-400 rounded-2xl ${
              isSettings ? "opacity-100" : "opacity-0"
            }`}
          >
            .
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <CiSettings color={isSettings ? "#2CC56F" : "#80828A"} />
              <h1 className="text-[#80828A] group-hover:text-[#2CC56F]">
                Settings
              </h1>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-7 justify-start text-xl cursor-pointer group hover:bg-green-200 "
          onMouseEnter={() => setIsMessages(true)}
          onMouseLeave={() => setIsMessages(false)}
        >
          <div
            className={`bg-gradient-to-b from-emerald-500 to-lime-300 h-[58px] text-emerald-400 rounded-2xl ${
              isMessages ? "opacity-100" : "opacity-0"
            }`}
          >
            .
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <AiOutlineMessage color={isMessages ? "#2CC56F" : "#80828A"} />
              <h1 className="text-[#80828A] group-hover:text-[#2CC56F]">
                Messages
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-emerald-500 to-lime-300 h-[215px] text-[#FDF6FF] rounded-2xl mx-3 flex flex-col justify-evenly items-center mb-3">
        <div>
          <h1 className="text-[26px]">Sunscription</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Explore 20+ Feature</p>
          <p>With Lifetime Membership</p>
        </div>
        <button className=" bg-[#FDF6FF] text-black py-3 px-7 rounded-xl">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};
export default SideBar;
