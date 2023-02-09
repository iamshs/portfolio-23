import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [array, setArray] = useState();
  useEffect(() => {
    fetch("../../../projects.json")
      .then((res) => res.json())
      .then((data) => {
        setArray(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <button className="btn bg-white text-black loading">loading</button>;
  }
  let arr;

  arr = array?.find((ar) => ar._id === id);
  console.log(arr);

  return (
    <div className="flex flex-col bg-neutral-800 lg:px-10 px-5 lg:flex-row items-start justify-center">
      <div className="max-w-6xl " >
        <div className="wrapper two">
          <div className="neon">
            <h3> {arr.name} </h3>
          </div>
        </div>
        <h4 className="lg:text-5xl md:text-4xl text-2xl"> {arr.details} </h4>
        <h4 className="text-2xl my-8">
          <span className="lg:text-4xl md:text-3xl text-2xl text-accent  font-bold">Technology used :</span> {arr.technology}
        </h4>
      </div>
      <div >
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image1}
          alt=""
        />
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image2}
          alt=""
        />
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image3}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
