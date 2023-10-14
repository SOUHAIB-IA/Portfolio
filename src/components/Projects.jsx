/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjectsItems from "./ProjectsItems";
import mnist from "../assets/mnist.png";
import support from "../assets/support.png";
import covmus from '../assets/musicpic.png'
/*import supvid from '../assets/support vid.mp4'*/
import musvid from '../assets/2023-10-14 00-36-22.mp4'


const data = [
  {
    image: mnist,
    title: "application de la recherch par images",
    details: "code et documentation d'une application de la recherch par images, en python ",
    gitlink:"https://github.com/SOUHAIB-IA/similarit-d-images/tree/master"
    
  },
  {
    image:support,
    title: "support clinet platform",
    details: "application web du support clinets avec react js,sprinboot, mysql",
    gitlink:"",
    source:supvid
  },
  {
    image:covmus,
    title: "application du converstion des audio",
    details: "appliaction desktop avec Tkinter qui convertire les extenstion des audio avec une extenstion unique .irm ",
    gitlink:"https://github.com/SOUHAIB-IA/convert-audio",
    source:musvid
  },
];

function Projects()
 {
  const [showVideoCard, setShowVideoCard] = useState(false);

  const handleShowVideoCard = () => {
    setShowVideoCard(true);
  };

  const handleHideVideoCard = () => {
    setShowVideoCard(false);
  };

  return (
    <div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
    
      Explore a collection of my diverse projects, each a testament to my creativity and problem-solving skills. From web development to design, discover the solutions I've crafted with passion and precision. Dive into my portfolio and witness my journey of turning ideas into reality
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {data.map((item, idx) => (
          <ProjectsItems
            key={idx}
            img={item.image}
            title={item.title}
            details={item.details}
            gitlink={item.gitlink}
            videoSrc={item.source}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
