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
import { useEffect, useState } from "react";
//  A list of the different types of courses that Beyondskill
// offers, such as business, technology, creative writing, or
// personal development.
function Courses({ menu, setMenu }) {
  const [startIndex, setStartIndex] = useState(0);
  const [currentId, setCurrentId] = useState(2);

  useEffect(() => {
    if (currentId - startIndex > 2) {
      setStartIndex((prevInd) => prevInd + 1);
    }

    if (currentId - startIndex < 2 && startIndex > 0) {
      setStartIndex((prevId) => prevId - 1);
    }

    if (currentId > 7) {
      setStartIndex(0);
      setCurrentId(2);
    }
  }, [currentId, startIndex]);
  const handlePrevious = () => {
    if (currentId - startIndex == 2) {
      setCurrentId((prevId) => prevId - 1);
    }
  };
  const visibleCourses = CoursesData.slice(startIndex, startIndex + 3);

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      {menu ? (
        <Menu />
      ) : (
        <>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            <div className="md:block w-full flex justify-center items-center md:m-6 mt-6">
              <img src={course} alt="" className="md:w-96 w-3/4" />
            </div>
            <div className="flex flex-col m-6">
              <div className="text-2xl font-semibold">
                Take Your Skills to the Next Level with Beyond Skill Courses...
              </div>
              <div className="text-md text-gray-500 text-base leading-7 tracking-wide m-4 font-semibold object-fill">
                <span className="font-bold text-lg">
                  {" "}
                  Welcome to Beyond Skill,
                </span>{" "}
                where we offer a diverse range of courses tailored to help you
                enhance your skills and excel in your chosen field. Our courses
                are meticulously designed to provide the latest knowledge and
                expertise, enabling you to stay ahead in today's dynamic
                landscape. One of our flagship courses is the Web Development
                Mastery program, ideal for those aiming to become professional
                web developers. This course emphasizes hands-on experience,
                allowing you to apply your skills to practical projects and
                build a robust professional portfolio. Participants learn
                through collaborative environments guided by experienced web
                developers. An exclusive feature of our Web Development Mastery
                program is the availability of mentorship, offering regular
                one-on-one sessions with seasoned developers providing guidance,
                feedback, and support throughout the course. Additionally,
                BeyondSkill offers courses covering a wide spectrum of fields
                including Data Science, Digital Marketing, Cybersecurity, and
                more. These courses are curated to equip you with the necessary
                skills and knowledge required to thrive in today's fast-paced
                technological landscape. Thank you for considering BeyondSkill
                for your educational needs. We believe our unique approach to
                learning, combined with expert instructors and real-world
                experiences, will give you a competitive edge in your chosen
                field.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-6 ">
            <div className="text-5xl font-bold mb-3 ">Our Courses</div>
            <div className="font-semibold text-gray-600 text-center">
              A list of the different types of courses that Beyondskill offers,
              such as business, technology, creative writing, or personal
              development.
            </div>
            <div className="flex justify-evenly items-center">
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="text-3xl cursor-pointer"
                onClick={handlePrevious}
              />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 place-items-center m-8 md:m-16">
                {visibleCourses.length > 0 ? (
                  visibleCourses.map((data) => (
                    <CourseSection
                      id={data.id}
                      key={data.id}
                      currentId={currentId}
                      img={data.image}
                      title={data.title}
                      description={data.description}
                      name={data.instructor}
                      value={data.value}
                      display={data.display}
                    />
                  ))
                ) : (
                  <p>Loading...</p> // Placeholder until visibleCourses is populated
                )}
              </div>

              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="text-3xl cursor-pointer"
                onClick={() => setCurrentId((prevId) => prevId + 1)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
