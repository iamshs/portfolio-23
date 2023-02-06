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
            <h1 className='text-5xl font-semibold text-center my-10'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
               projects.map(project => <Project key={project._id} project={project} />)
            }
            </div>
        </section>
    );
};

export default Projects;