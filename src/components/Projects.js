import React from "react";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import Spinner from "./Spinner";
import './Styles/Projects.css'
import { motion } from "framer-motion";
import {container} from '../helpers/framer-motion'


const Projects = () => {
  const [projects, isLoading] = useProjects();
  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className="lg:px-10 px-5">
   <h2 className="my-10 lg:my-20 md:my-16 text-center">MY PROJECTS</h2>
      <motion.div variants={container}   whileInView="visible" initial="hidden" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center lg:grid-cols-3 gap-14 lg:gap-10 px-1 lg:px-0">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
