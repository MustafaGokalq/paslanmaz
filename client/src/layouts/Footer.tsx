import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
    <div className=" w-full border border-darkDanger"></div>

      <div className=" grid grid-cols-5 gap-x-5">
      <div className=" flex flex-col gap-y-3 border-r-2">
        <div className=" flex justify-start items-center gap-x-2 select-none cursor-pointer rounded-xl hover:bg-darkDanger hover:text-white transition-all">
          <div className="bg-darkDanger p-2 rounded-full">
            <FaFacebook className="text-white" />
          </div>
          <p>Facebook</p>
        </div>

        <div className=" flex justify-start items-center gap-x-2 select-none cursor-pointer rounded-xl hover:bg-darkDanger hover:text-white transition-all">
          <div className="bg-darkDanger p-2 rounded-full">
            <FaInstagram className="text-white"/>
          </div>
          <p>İnstagram</p>
        </div>

        <div className=" flex justify-start items-center gap-x-2 select-none cursor-pointer rounded-xl hover:bg-darkDanger hover:text-white transition-all">
          <div className="bg-darkDanger p-2 rounded-full">
            <FaTwitter className="text-white"/>
          </div>
          <p>Twitter</p>
        </div>

        <div className=" flex justify-start items-center gap-x-2 select-none cursor-pointer rounded-xl hover:bg-darkDanger hover:text-white transition-all">
          <div className="bg-darkDanger p-2 rounded-full">
            <FaTiktok className="text-white"/>
          </div>
          <p>Tiktok</p>
        </div>

        <div className=" flex justify-start items-center gap-x-2 select-none cursor-pointer rounded-xl hover:bg-darkDanger hover:text-white transition-all">
          <div className="bg-darkDanger p-2 rounded-full">
            <FaYoutube className="text-white"/>
          </div>
          <p>Youtube</p>
        </div>
      </div>

      <div>asdsa</div>

      
    </div>
    </>
  
  );
};

export default Footer;
