/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import{FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn, FaGithub} from 'react-icons/fa'
import imain from "../assets/1 (2).jpg"
function Main() {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover "
        src={imain}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start  items-center">
          <h1 className="sm:text-5xl text-4xl  text-gray-800 font-serif font-extrabold">I'm Souhaib GARAAOUCH</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "full satck devoloper",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "freelancer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/SOUHAIB-IA" target="_blank"><FaGithub className="cursor-pointer" size={20}/></a>
            <a href="https://www.facebook.com/souhaib.garaaouch.9" target="_blank"><FaFacebookF className="cursor-pointer" size={20}/></a>
            <a href="https://www.instagram.com/souhaibgaraaouch/" target="_blank"><FaInstagram className="cursor-pointer" size={20}/></a>
            <a href="https://www.linkedin.com/in/souhaib-garaaouch-853a011a5/" target="_blank"><FaLinkedinIn className="cursor-pointer" size={20}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
