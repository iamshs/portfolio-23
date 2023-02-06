import React from 'react';
import bg from "../../../assets/bg.jpg"



const Home = () => {
    return (
        <section className='flex items-center justify-center bg-cover min-h-screen' style={{backgroundImage: `url(${bg})` , backgroundColor: '#cccccc'}} >
         <div >
         <h1 className='text-5xl font-semibold text-primary '>HELLO , I'M MD SHOLAYMAN</h1>
          <p className='text-3xl font-semibold'>Welcome to my portfolio.</p>
         </div>
        </section>
    );
};

export default Home;