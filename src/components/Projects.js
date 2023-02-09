import React from "react";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import './Styles/Projects.css'

const Projects = () => {
  const [projects, isLoading] = useProjects();
  if (isLoading) {
    return <button className="btn loading">loading</button>;
  }

  return (
    <section className="px-4">
    <div class="wrapper six text-center lg:my-20 my-14">
        <div>
            <h3 class="flicker">MY PROJECTS</h3>
        </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
