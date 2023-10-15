/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProjectsItems = ({ img, title, details, gitlink, videoSrc }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleHideVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gary-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] ml-96 w-[400px]">
        <h3 className="text-2xl font-extrabold text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-black text-center">{details}</p>
        {title === "support client platform" ? (
          <button
            onClick={handleShowVideo}
            className="text-center p-3 rounded-lg bg-white text-gray-700 font-blod cursor-pointer text-lg"
          >
            Show Video
          </button>
        ) : title === "application du converstion des audios" ? (
          <div className=" inline-flex gap-3">
            <button
              onClick={handleShowVideo}
              className="text-center p-3 rounded-lg bg-white text-gray-700 font-blod cursor-pointer text-lg"
            >
              Show Video
            </button>
            <a href={gitlink}>
              <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-blod cursor-pointer text-lg">More Info</p>
            </a>
          </div>
        ) : (
          <a href={gitlink}>
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-blod cursor-pointer text-lg">More Info</p>
          </a>
        )}
      </div>
      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{title} Video</h2>
            <video width="770" height="515" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
              onClick={handleHideVideo}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsItems;
