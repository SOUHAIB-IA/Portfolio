/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Skillsitems = ({ title, details }) => {
  // Split the details into an array of items (assuming details are comma-separated)
  const detailsArray = details.split(', ');

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#001b5e] rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="text-lg font-semiblod text-[#001b5e]">{title}</span>
        </p>
        <ul className="list-disc list-inside">
          {detailsArray.map((item, index) => (
            <li key={index} className="my-2 text-base font-normal text-stone-500">{item}</li>))
          }
        </ul>
      </li>
    </ol>
  );
}

export default Skillsitems;
