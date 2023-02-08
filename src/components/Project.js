import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card rounded max-w-md bg-[#0D0D0D] shadow-xl place-items-center grid ">
      
        <img src={project.image1} alt="" />
        <h1 className="lg:text-4xl text-3xl font-bold mt-10 mb-4 ">{project.name} </h1>
        <div className="flex justify-center ">
        
        <button className="btn btn-primary btn-sm mr-2">Live Site</button>
        <button className="btn btn-accent btn-sm ml-2">Client Git</button>
        </div> 
        <button className="btn btn-outline w-[65%] font-bold rounded lg:text-lg  lg:my-8 my-6">Project Details</button>
      
    </div>
  );
};

export default Project;
