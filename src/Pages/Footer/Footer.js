import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className=" bg-neutral-800 grid lg:place-items-center place-items-start p-10">
      <h1 className="text-3xl md:text-3xl text-2xl text-accent font-semibold title">MD SHOLAYMAN</h1>
      <div className="text-center ont-semibold lg:text-2xl text-xl my-5 ">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        All CopyRights Reserved {year}
      </div>
      <Link className="lg:text-2xl text-xl text-white" to={'/privacy'} >Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
