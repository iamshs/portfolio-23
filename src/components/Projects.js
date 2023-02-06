import React from 'react';
import useProjects from '../hooks/useProjects';
import Project from './Project';



const Projects = () => {
const [projects,isLoading,isError,error ] = useProjects()
if(isLoading){
    return <button className="btn loading">loading</button>
}

    return (
        <section className='px-4' >
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center lg:py-20 md:py-20 py-10'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
               projects.map(project => <Project key={project._id} project={project} />)
            }
            </div>
        </section>
    );
};

export default Projects;