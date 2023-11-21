import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import enterprise from '../logo/planning.png';
import govt from '../logo/government.png'
import ind from '../logo/vulnerable-individuals.png'
import learn from "../assets/undraw_flying_drone_re_sh64.svg" 

const MainSection = () => {
  return (
    <div className="bg-bodyBg min-w-screen">
    <div className="grid lg:grid-cols-2 grid-cols-1 p-10 flex-wrap place-items-center gap-16 align-center  lg:h-screen">
      <div className="flex flex-col">
        {/* <div className="font-semibold  tracking-wider text-5xl mb-6">Trust an IDC leader to overcome digital talent gaps.</div> */}
        {/* <div className="text-xl mb-6">
          Compared with 21 vendors, IDC recognized Udacity for creating
          job-ready digital talent and delivering measurable business outcomes.
        </div> */}
        <div className="font-semibold text-4xl mb-6">Unlock Your Potential with <span className="text-red-400 font-medium font-mono">BeyondSkill's</span>  Wide Range of Courses</div>
        <div className="text-lg mb-6">
        BeyondSkill is proud of the many achievements of our students and instructors. Our aim is to provide the highest quality education and resources to help learners succeed in their personal and professional endeavors.
        </div>
        <div className="flex items-center space-x-6">   
        <div className="bg-blue text-white p-4 w-fit rounded-md cursor-pointer flex justify-evenly items-center"><span className="mr-2">Download report </span><FontAwesomeIcon icon={faArrowRight} /></div>
        <div className="text-blue md:text-base text-sm underline cursor-pointer flex justify-evenly items-center"><span className="mr-2">Explore our solution</span><FontAwesomeIcon icon={faArrowRight}/></div>
      </div>
        </div>
        <div className="flex justify-center items-center lg:mt-6">
        <img src={learn} alt="" className=""/>
        {/* <img src={main} alt="" className=" rounded-lg"/> */}
        </div>
    </div>
    <div className="bg-darkBlue p-10 md:rounded-bl-full">
      <div className="text-skyBlue">Individual Learners</div>
      <div className="flex justify-between flex-wrap">
      <div className="text-white font-semibold text-xl">Accelerate your career with job-ready digital skills.</div>
      <div className="border-2 border-white rounded-md text-white p-3 flex justify-between md:mt-0 mt-4 cursor-pointer"><div className="mr-3">Explore Programs </div><span><FontAwesomeIcon icon={faArrowRight} /></span></div>
      </div>
    </div>
    <div className="flex flex-col p-10">
      <div className="text-5xl font-semibold mb-10 leading-tight">Our proven results</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 place-items-center">

      <div className="flex flex-col bg-white p-4 h-fit rounded-tr-3xl hover:shadow-2xl transition-shadow duration-75 cursor-pointer border-gray-500">
        <div className="flex items-center mb-10">
          <div><img src={enterprise} alt="" className="w-10 mr-3"/></div>
          <div className="text-sm font-medium">For Enterprise</div>
        </div>
        <div className="font-medium font-serif text-4xl mb-6">FORRESTER</div>
        <div className="font-medium text-2xl w-3/4">232% ROI reported with a payback period of under 3 months</div>
      </div>

      <div className="flex flex-col bg-white p-8 h-fit rounded-br-3xl hover:shadow-2xl transition-shadow duration-75 cursor-pointer border-gray-500">
        <div className="flex items-center mb-10">
          <div><img src={govt} alt="" className="w-10 mr-3"/></div>
          <div className="text-sm font-medium">For Government</div>
        </div>
        <div className="font-medium font-serif text-4xl mb-6">MISK ACADEMY</div>
        <div className="font-medium text-2xl w-3/4">11,800+ graduates in Saudi Arabia transformed scholarships into careers</div>
      </div>

      <div className="flex flex-col bg-white p-8 h-fit rounded-tl-3xl hover:shadow-2xl transition-shadow duration-75 border-gray-500 cursor-pointer">
        <div className="flex items-center mb-10">
          <div><img src={ind} alt="" className="w-10 mr-3"/></div>
          <div className="text-sm font-medium">For Individuals</div>
        </div>
        <div className="font-medium text-2xl w-3/4">70+% of graduates get promoted or land a better job</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MainSection;
