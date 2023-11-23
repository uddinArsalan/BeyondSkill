import React from "react";
// import logo from "../logo/udacity.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import bold from "../logo/bold.png";

const Footer = () => {
  return (
    <div className="p-16 flex flex-col bg-bodyBg">
      <div className="flex justify-around w-40 mb-6">
        <img src={bold} alt="logo" className="w-8" />
        <span className="text-xl font-semibold">EYONDSKILL</span>
      </div>
      <div className="grid lg:grid-cols-4 gap-8 md:place-items-center md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-evenly h-60">
          <div className="text-xl font-semibold">Feature Programs</div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Business Analytics
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">SQL</div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Data Engineering with AWS
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Data Analyst
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Intro to Programming
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Digital Marketing
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Self Driving Car Engineer
          </div>
        </div>
        <div className="flex flex-col h-60 justify-evenly">
          <div className="text-xl font-semibold">Only at BeyondSkill</div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Artificial Intelligence
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Deep Learning
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Digital Marketing
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Flying Car and Autonomous Flight Engineer
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Intro to Self-Driving Cars
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Machine Learning Engineer
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Robotics Software Engineer
          </div>
        </div>
        <div className="flex flex-col h-60 justify-evenly">
          <div className="text-xl font-semibold">Resources</div>
          <div className="text-sm cursor-pointer hover:text-blue">Catalog</div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Career Services
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Student Success
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            BeyondSkill's Talks
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            {" "}
            Scholarships
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            What is AI?
          </div>
        </div>
        <div className="flex flex-col h-60 justify-evenly">
          <div className="text-xl font-semibold">Support</div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Contact Us
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Help and FAQ
          </div>
          <div className="text-sm cursor-pointer hover:text-blue">
            Tech Requirements
          </div>
          <div className="flex mt-2 justify-evenly">
            <a href="https://www.instagram.com/uddinarsalan91/" target="_blank">
              <div className="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer"
                />
              </div>
            </a>
            <div className="">
              <FontAwesomeIcon icon={faFacebook} className="cursor-pointer" />
            </div>
            <a href="https://github.com/uddinArsalan">
              <div className="">
                <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              </div>
            </a>
            <a href="https://twitter.com/Arsalan_0101">
              <div>
                <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
              </div>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
