/* eslint-disable no-unused-vars */
import React from "react";
import Skillsitems from "./Workitems";

const data = [
  {
    title: "languages",
    details: "Java, JavaScript, SQL, HTML, CSS",
  },
  {
    title: "Web Technologys",
    details: "React js, SprinBoot, Tailwind, Bootstarp",
  },
  {
    title: "Additional Skills",
    details: "Docker, Postman, APIs, UML, MySQL, Git,GitHub",
  },
];

function Skills() {
  return (
    <div id="Work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
      {data.map((item, idx) => (
        <Skillsitems
          key={idx}
          title={item.title}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Skills;
