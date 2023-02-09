import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const {name,image1 , client , live,server} = project

  const goToLiveSite =() =>{
    <Link to={window.open(`${live}`)}></Link>
  }
  const goToClientGit =() =>{
    <Link to={window.open(`${client}`)}></Link>
  }
  const goToServerGit =() =>{
    <Link to={window.open(`${server}`)}></Link>
  }
  return (
    <div className="card rounded max-w-md bg-[#0D0D0D] shadow-xl place-items-center grid ">
      
        <img src={image1} alt="" />
        <h1 className="lg:text-4xl text-3xl font-bold mt-10 mb-4 ">{name} </h1>
        <div className="flex justify-center ">
        
        <button onClick={goToLiveSite} className="btn btn-primary btn-sm mr-2">Live Site</button>
        <button onClick={goToClientGit} className="btn btn-accent btn-sm ml-2">Client Git</button>
        {
          server && <button onClick={goToServerGit} className="btn btn-secondary btn-sm ml-2">Server Git</button>
        }
        </div> 
        <button  className="btn btn-outline w-[65%] font-bold rounded lg:text-lg  lg:my-8 my-6">Project Details</button>
      
    </div>
  );
};

export default Project;
