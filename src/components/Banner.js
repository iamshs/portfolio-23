import React from 'react';
import './Styles/Banner.css'
import bg from "../assets/bg.png";
import { AiFillGithub } from "react-icons/ai";

const Banner = () => {
    return (
        <section
        className="flex items-center justify-center max-w-10xl bg-cover 
        text-center bg-no-repeat bg-center h-[50vh] md:h-[60vh] lg:h-[90vh] max-w-10xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="grid place-items-center">
          <h1 className="animate-character ">
            Hello , I'm MD SHOLAYMAN
          </h1>
          <p className="lg:text-2xl text-lg text-info font-semibold  mt-2">
           Junior Web Developer
          </p>
          <p className="lg:text-3xl text-xl font-semibold  mt-8">
            Welcome to my portfolio.
          </p>
          <p className="lg:text-3xl text-xl mt-2 font-semibold text-white">
            Want to learn more about me? Visit my
            <button className="btn btn-active btn-link text-success font-bold">
              <span className="mr-2 text-lg">GitHub</span>
              <AiFillGithub size={25} />
            </button>
          </p>
          <div className="flex flex-col lg:flex-row md:flex-row lg:mt-10 md:mt-8 mt-5  ">
            <button className="btn lg:text-lg btn-primary m-2">
              Download Resume
            </button>
            <button className="btn btn-accent lg:text-lg m-2">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    );
};

export default Banner;