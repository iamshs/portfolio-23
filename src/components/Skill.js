import React from "react";
import reactIcon from "../assets/icon/icons8-react.svg";
import htmlIcon from "../assets/icon/icons8-html-5.svg";
import cssIcon from "../assets/icon/icons8-css3.svg";
import bootIcon from "../assets/icon/icons8-bootstrap.svg";
import tailIcon from "../assets/icon/icons8-tailwindcss.svg";
import jsIcon from "../assets/icon/javascript-1.svg";
import exIcon from "../assets/icon/icons8-express-js.svg";
import moIcon from "../assets/icon/icons8-mongodb.svg";
import './Styles/Skill.css'

const Skill = () => {
  return (
    <section className="skill-container">
        <h2 className="my-10 lg:py-20 text-center md:my-16">MY SKILLS</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:grid-cols-5  gap-14 lg:pl-[50px] ml-24 md:ml-40">
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={htmlIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={cssIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={bootIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={tailIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={jsIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={reactIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={exIcon} alt="" />
        <img className="lg:w-[196px] w-[90px] md:w-[144px] rotate " src={moIcon} alt="" />
      </div>
    </section>
  );
};

export default Skill;
