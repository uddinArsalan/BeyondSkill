import React from "react";
import Navbar from "../components/Navbar";
import course from "../assets/undraw_reminder_re_fe15.svg";
import Menu from "../components/Menu";
import CourseSection from "./CourseSection";
import CoursesData from "./CoursesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
//  A list of the different types of courses that Beyondskill
// offers, such as business, technology, creative writing, or
// personal development.
function Courses({ menu, setMenu }) {

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      {menu ? (
        <Menu />
      ) : (
        <>
          <div className="flex flex-wrap md:flex-nowrap">
            <img src={course} alt="" className="m-6 w-96" />
            <div className="flex flex-col m-6">
              <div className="text-2xl font-semibold">
                Take Your Skills to the Next Level with Beyond Skill Courses...
              </div>
              <div className="text-md text-gray-500 text-base leading-7 tracking-wide m-4 font-semibold object-fill">
                <span className="font-bold text-lg">
                  {" "}
                  Welcome to Beyond Skill,
                </span>{" "}
                where we offer a wide range of courses to help you take your
                skills to the next level. Our courses are designed to provide
                you with the latest knowledge and skills in your chosen field,
                so that you can stay ahead of the curve and excel in your
                career. One of our most popular courses is our Web Development
                Mastery program, which is designed for individuals who want to
                become professional web developers. Our course is designed to
                provide you with real-world experience, so that you can apply
                your skills to real projects and build a professional portfolio.
                You will learn by doing, in a collaborative environment, with
                the guidance of experienced web developers. Another unique
                feature of our Web Development Mastery program is the
                availability of mentorship. Our course includes regular
                one-on-one sessions with experienced web developers who will
                provide you with guidance, feedback, and support throughout the
                course. In addition to our Web Development Mastery program, we
                also offer courses in a variety of other fields such as Data
                Science, Digital Marketing, Cyber security, and many more. These
                courses are designed to provide you with the knowledge and
                skills you need to succeed in today's fast-paced and constantly
                changing technology landscape. Thank you for considering Beyond
                Skill for your education and career development needs. We
                believe that our unique approach to learning, combined with our
                expert instructors and real-world experience, will give you the
                edge you need to succeed in your chosen field.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center m-12 items-center ">
            <div className="text-2xl font-semibold">Our Courses</div>
            <div className="font-semibold text-gray-600">
              A list of the different types of courses that Beyondskill offers,
              such as business, technology, creative writing, or personal
              development.
            </div>
            <div className="flex justify-around items-center">
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="text-3xl cursor-pointer"
              />
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 place-items-center m-16">
                {CoursesData.map(data => {
                  return (
                    <CourseSection
                      key={data.id}
                      img={data.image}
                      title={data.title}
                      description={data.description}
                      name={data.instructor}
                      value = {data.value}
                    />
                  )
                })}      
              </div>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="text-3xl cursor-pointer"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
