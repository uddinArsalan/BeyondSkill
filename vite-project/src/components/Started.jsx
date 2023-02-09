import React from "react";
import Footer from "./Footer";
import ind from "../logo/vulnerable-individuals.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import Nav from "../signIn Component/Nav";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Started = ({ menu, setMenu }) => {
  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      {/* <Nav /> */}
      {menu ? <Menu /> :
      <>
      <div className="flex justify-center items-center bg-signInBG">
        <div className="rounded-t-3xl p-6 bg-white m-28 mr-6 ml-6 justify-around">
          <div className="flex mb-4">
            <img src={ind} alt="" className="w-16 mr-4" />
            <div className="text-3xl md:text-4xl font-semibold">For Individuals</div>
          </div>
          <div className="text-xl font-semibold mb-2">Accelerate your career with job-ready digital skills</div>
          <div className="text-gray-600 text-lg mb-8">Create an account and start learning today.</div>
          <Link to="/signIn" >
          <div className="bg-blue p-2 mt-4 text-white font-bold text-xl rounded-md cursor-pointer w-36 flex justify-between items-center mb-3 ">Sign up <span><FontAwesomeIcon icon={faArrowRight} className='text-lg'/></span></div></Link>
          <div>Already have an account? <Link to="/signIn" ><span className="text-blue cursor-pointer text-base">Sign in.</span></Link></div>
        </div>
      </div>
      <Footer />
    </>
      }
      </div>
  );
};

export default Started;
