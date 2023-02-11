import React from "react";
import me from "../../../assets/me.jpg";
import bgPo from '../../../assets/bgPo.jpg'

const About = () => {
  return (
    <div  style={{
        backgroundImage: `url(${bgPo})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
       
      }} className="flex flex-col-reverse lg:flex-row items-center justify-center lg:p-20 p-8">
      <div className="lg:max-w-[50%] lg:p-14 p-2 ">
        <h1 className="title lg:text-5xl md:text-4xl text-3xl text-warning my-5">About me</h1>
        <p className="lg:text-3xl md:text-2xl text-xl ">
          My Name is Md Sholayman.I am a full-stack developer.I have experience
          in front-end web development, working with technologies like
          React,Tailwind CSS, React Bootstrap , express.js , firebase,
          MongoDB.Until now,I am enjoying every part of my journey in
          Programming World.
        </p>
      </div>
      <div className="avatar">
  <div className="lg:w-[35rem] w-[20rem]  mb-10 lg:mb-0  rounded-full">
    <img src={me} alt='' />
  </div>
</div>
    </div>
  );
};

export default About;
