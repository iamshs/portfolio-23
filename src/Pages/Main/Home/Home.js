import React from "react";
import bg from "../../../assets/bg.png";
import { AiFillGithub } from "react-icons/ai";
import Projects from "../../../components/Projects";

const Home = () => {
  return (
   <>
    <section
      className="flex items-center justify-center max-w-10xl bg-cover min-h-screen bg-no-repeat bg-center lg:bg-fixed bg-unset"
      style={{ backgroundImage: `url(${bg})`, backgroundColor: "#cccccc" }}
    >
      <div className="grid place-items-center">
        <h1 className="lg:text-6xl font-semibold text-secondary ">
          Hello , I'm MD SHOLAYMAN
        </h1>
        <p className="text-2xl font-semibold  mt-8">Welcome to my portfolio.</p>
        <p className="text-2xl font-semibold text-white">
          Want to learn more about me? Visit my
          <button className="btn btn-active btn-link text-success font-bold">
            <span className="mr-2 text-lg">GitHub</span>
            <AiFillGithub size={25} />
          </button>
        </p>
        <div className="flex  ">
        <button className="btn text-lg btn-primary m-1">Download Resume</button>
        <button className="btn btn-accent text-lg m-1">Contact Me</button>
        </div>
      </div>
      
    </section>
    <Projects />
   </>
  );
};

export default Home;
