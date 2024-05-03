import { useRoot } from "@/context/ContextProvider";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { HiPlusSm } from "react-icons/hi";
import { HiCog } from "react-icons/hi";
import { FaClockRotateLeft } from "react-icons/fa6";
import icon from "../public/icon.svg"
import Image from "next/image";
import logo from "../public/logo.png"
import { Link } from 'react-router-dom'


export default function Sidebar() {
  const { showSideBar, handleShowSideBar } = useRoot();
  const handleShow = () => {
    handleShowSideBar(!showSideBar);
  };


  return (
    <div className={`min-h-screen flex flex-col justify-center bg-[#1F1F1F]
    ${showSideBar ? "w-[300px]" : "w-[200px]"}`}>

      <div className="flex justify-center items-center">

      <Image src={logo} alt="logo" className={`${showSideBar ? " ml-5 w-[120px] h-auto" : "hidden"}`}></Image>


      <div className={`${showSideBar ? "flex flex-row-reverse justify-center ml-auto" : "flex flex-col justify-center items-center"}`}>
      {showSideBar ? (
        <button
          className="transition m-4 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={handleShow}
        >
          <MdOutlineMenuOpen className="text-white text-4xl" />
        </button>
      ) : (
        <button
          className="transition mt-8 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={handleShow}
        >
          <MdOutlineMenu className="text-white text-4xl"/>
        </button>
      )}

      <button 
          className="my-5" >
          <RiChatNewFill className="text-white rounded-lg text-3xl text-center"/>
      </button>
      </div>
      </div>

      <div className="flex justify-center items-center flex-col w-full">
      <button
          className="p-2 my-0 mx-auto w-[100%]">
          <p className={`hover:bg-white border transition-colors text-[#DE082D] rounded-lg text-[14px] text-center mx-auto ${showSideBar ? "w-[80%]" : "w-[100%]"}`}>Forum Data</p>
      </button>
      <button
          className="p-2 my-0 mx-2 w-[100%]">
          <p className={`hover:bg-white border text-[#DE082D] rounded-lg text-[14px] text-center mx-auto ${showSideBar ? "w-[80%]" : "w-[100%]"}`}>Dex Trade Data</p>
      </button>
      <button 
          className="p-2 my-0 mx-2 w-[100%]">
          <p className={`hover:bg-white border text-[#DE082D] rounded-lg text-[14px] text-center mx-auto ${showSideBar ? "w-[80%]" : "w-[100%]"}`}>Documentation Data</p>
      </button>
      </div>

      <div className={`mt-auto ${showSideBar ? "flex flex-row justify-center ml-auto" : "flex flex-col items-center justify-center mb-5"}`}>
      <button
          className=" mx-3 my-3">
          <HiCog className=" text-white text-3xl"/>
      </button>
      <button
          className="mx-3 my-3">
          <FaClockRotateLeft className=" text-white text-lg"/>
      </button>
      <Image src={icon} alt="icon" className="w-6 mx-3 my-3"></Image>
      </div>
    </div>
  );
}
