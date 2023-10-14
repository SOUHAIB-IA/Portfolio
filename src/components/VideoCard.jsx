/* eslint-disable no-unused-vars */
import React from "react";
import suppvid from '../assets/support vid.mp4';

const VideoCard = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Support Client Platform Video</h2>
        <iframe
          width="560"
          height="315"
          src={suppvid}
          title="Support Client Platform Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
