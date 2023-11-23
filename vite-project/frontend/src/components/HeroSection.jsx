import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import hero1 from "../logo/hannah-olinger-NXiIVnzBwZ8-unsplash.jpg";
import hero2 from "../logo/muha-ajjan-sL2BRR1cuvM-unsplash.jpg";
import book from "../logo/book.png";
import earth from "../logo/earth.png";
import folder from "../logo/folder.png";
import doc from "../logo/google-docs.png";
import heroSvg from "../assets/undraw_new_year_2023_g4rf.svg";
import { useState } from "react";

const HeroSection = () => {

  const [workshop,setWorkshop] = useState(true)
  const [platform,setPlatform] = useState(false)
  const [impact , setImpact] = useState(false)

  const styles = {
    display : workshop ? "flex" : "none"
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-8 bg-white p-8">
        <div className="flex flex-col">
          <div className="text-4xl font-semibold mb-8">
            BeyondSkill's Talent Transformation Suite
          </div>
          <div className="text-xl mb-6">
            Our experts work with you to design a tailored transformation
            journey. Solve your acute workforce challenges to deliver next-level
            business results.
          </div>
          <div className="text-blue underline cursor-pointer mb-10 flex justify-around w-28">
            Learn more
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="fa-x"/>
            </span>
          </div>
          <ol>
            <div style={{color : workshop ? "blue" : ""}} className="mb-4 cursor-pointer">
              <span className="mr-4">
                {workshop ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
              <li className="inline font-medium text-2xl" onClick={() => {
                setImpact(false)
                setPlatform(false)
                setWorkshop(prev => !prev)
                }}>Workshop</li>
            </div>
            <div style={styles} className="mb-3">
              Assess talent gaps to accurately benchmark and prioritize
              innovation projects. Align organizational goals and define
              workforce transformation strategy, with competencies curated to
              the individual level.
            </div>
            <hr />
            <div style={{color : platform ? "blue" : ""}} className="mb-4 mt-4 hover:text-blue cursor-pointer">
              <span className="mr-4">
              {platform ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
              <li className="inline mb-4 font-medium text-2xl" onClick={() => {
                setWorkshop(false)
                setImpact(false)
                setPlatform(prev => !prev)
                }}>Platform</li>
            </div>
            <div style={{display: platform ? "flex" : "none"}} className="mb-3">
              Easily deploy our infinitely scalable platform, optimized to
              enable and empower job-ready digital talent. Highly focused
              content—refined over 10 years with industry experts—verifies core
              competencies through personalized feedback.
            </div>
            <hr />
            <div className="mt-4 mb-4 hover:text-blue cursor-pointer" onClick={() => 
              {
                setImpact(prev => !prev)
                setPlatform(false)
                setWorkshop(false)
              }
              }>
              <span className="mr-4">
                {impact ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
              <li style={{color : impact ? "blue" : ""}} className="inline font-medium text-2xl">Impact</li>
            </div>
            <div style={{display: impact ? "flex" : "none"}} className="mb-3 hidden">
              Use our proven playbook to achieve targeted results that increase
              retention and productivity. Consistently deliver quantifiable
              outcomes that matter to ROI and business growth, while gaining
              productivity and a competitive advantage in the market.
            </div>
          </ol>
        </div>
        <img src={hero1} alt="" className="rounded-lg md:flex hidden" />
      </div>
      <div className="grid p-8 bg-bodyBg lg:grid-cols-2 grid-cols-1 place-items-center gap-6">
        <div className="flex justify-center items-center order-2 md:order-1">
          {/* <img src={hero2} alt="" className="rounded-2xl"/> */}
          <img src={heroSvg} alt="" className="rounded-2xl" />
        </div>
        <div className="flex flex-col md:order-2">
          <div className="text-4xl font-semibold mb-8">
            BeyondSkill's Digital Competency Platform
          </div>
          <div className="mb-3">
            Our competencies focus exclusively on in-demand digital technologies
            and ensure workplace relevance.
          </div>
          <div className="text-blue underline cursor-pointer mb-10">
            Learn more{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-bodyBg flex flex-col">
        <div className="text-center text-lg font-semibold">
          Job-ready talent. Superior outcomes.
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-10 p-16">
          <div className="flex justify-between items-center">
            <img src={book} alt="" className="w-12 mr-2" />
            <div className="font-medium">
              Curriculum co-created with industry leaders
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img src={doc} alt="" className="w-12 mr-2" />
            <div className="font-medium">
              Personalized feedback ensures mastery
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img src={folder} alt="" className="w-12 mr-2" />
            <div className="font-medium">
              Hands-on projects, not step-by-step guides
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img src={earth} alt="" className="w-12 mr-2" />
            <div className="font-medium">
              1,400+ highly vetted expert network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
