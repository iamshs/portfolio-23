import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="grid lg:place-items-center place-items-start p-10">
      <h1 className="text-3xl text-accent font-semibold title">MD SHOLAYMAN</h1>
      <div className="text-center ont-semibold text-2xl my-5 ">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        All CopyRights Reserved {year}
      </div>
      <Link className="text-2xl text-white" to={'/privacy'} >Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
