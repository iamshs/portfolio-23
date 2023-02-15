import React , { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Styles/ContactForm.css";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk3o9zp', 'template_26p3xbm', form.current, 'ucZWwsP_PL0klx1C6')
      .then((result) => {
         if(result.status === 200){
            toast.success('Message sent');
            e.target.reset()
         }
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="mt-10 lg:p-16 md:p-12 p-6 flex flex-col lg:flex-row  items-start justify-around">
      <div className="lg:max-w-[50%] ">
        <h4 className="lg:text-5xl md:text-3xl text-xl font-bold text-white">Contact Me</h4>
        <h1 className="lg:text-6xl md:text-4xl text-2xl my-3 contact-header font-semibold">
          GET IN TOUCH
        </h1>
        <form className="my-10" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className=" w-full font-bold  lg:text-2xl text-sm md:text-lg my-6 lg:p-4 p-2 md:p-3  "
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Id"
            className=" w-full font-bold  lg:text-2xl text-sm md:text-lg my-6 lg:p-4 p-2 md:p-3  "
          />
          <textarea
            type="text"
            rows={"7"}
            name="message"
            placeholder="Message"
            className=" w-full font-bold  lg:text-2xl text-sm md:text-lg my-6 lg:p-4 p-2 md:p-3  "
          ></textarea>

          <input
            type={"submit"}
            className="bg-white hover:bg-[#D2D2D2] text-black lg:text-2xl md:text-xl text-md submit-btn font-semibold lg:px-14 px-6
              shadow-lg lg:py-4 py-3"
            value="Submit"
          />
        </form>
      </div>
      <div className="">
        <div className="flex items-center my-6  text-white font-semibold">
          <MdEmail size={40} />
          <p className=" lg:text-[1.3rem]  link  md:text-[1.2rem] text-[1rem] lg:ml-4 ml-2">mdsholayman98@gmail.com</p>
        </div>
        <div className="flex items-center my-6  text-white font-semibold">
          <MdCall size={40} />
          <p className=" lg:text-[1.3rem]  link  md:text-[1.2rem] text-[1rem] lg:ml-3 ml-2 ">+8801620565355</p>
        </div>
        <div className="flex items-center my-6  text-white font-semibold">
          <ImLinkedin size={34} />
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/md-sholayman-626776229/",
            }}
            target="_blank"
            className=" lg:text-[1.3rem] md:text-[1.2rem]  link  text-[1rem] lg:ml-4 ml-3"
          >
            Md Sholayman
          </Link>
        </div>
        <div className="flex items-center my-6  text-white font-semibold">
          <ImFacebook2 size={33} />
          <Link
            to={{
              pathname: "https://www.facebook.com/sholayman.sojib.7/",
            }}
            target="_blank"
            className=" lg:text-[1.3rem] md:text-[1.2rem]  link  text-[1rem] lg:ml-4 ml-3"
          >
            Sholayman Sojib
          </Link>
        </div>
        <div className="flex items-center my-6  text-white font-semibold">
          <FaInstagramSquare size={38} />
          <Link
            to={{
              pathname: "https://www.instagram.com/iam_shs/",
            }}
            target="_blank"
            className=" lg:text-[1.3rem] lg:ml-4 ml-3  link  md:text-[1.2rem] text-[1rem]"
          >
            iam_shs
          </Link>
        </div>
        <div className="flex items-center my-6  text-white font-semibold">
          <ImTwitter size={38} />
          <Link
            to={{
              pathname: "https://www.instagram.com/iam_shs/",
            }}
            target="_blank"
            className=" lg:text-[1.3rem] lg:ml-4  link  ml-2 md:text-[1.2rem] text-[1rem] "
          >
            @MdSholayman99
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
