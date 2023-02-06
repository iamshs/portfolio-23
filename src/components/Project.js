import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card  bg-[#0D0D0D] shadow-xl">
      
        <img src={project.image1} alt="" />
        <h1>{project.name} </h1>
      
    </div>
  );
};

export default Project;
