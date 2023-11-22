import React from "react";
import Navbar from "../components/Navbar";
import course from "../assets/undraw_reminder_re_fe15.svg";
import Menu from "../components/Menu";
import CourseSection from "./CourseSection";
import { useMediaQuery } from "react-responsive";
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
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const [smallerScreen, setSmallerScreen] = useState(false);
  const [initialCards,setInitialCards] = useState(3)
  const [smallestScreen, setSmallestScreen] = useState(false);
  useEffect(() => {
    if (isTablet) setSmallerScreen(true);
    if (isPhone) setSmallestScreen(true);
  }, [isTablet, isPhone]);
  useEffect(() => {
    if (smallerScreen) setInitialCards(2);
    if (smallestScreen) setInitialCards(1);   
    console.log(smallerScreen, smallestScreen);
  },[smallerScreen,smallestScreen])
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

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      {menu ? (
        <Menu />
      ) : (
        <>
          <div className="flex flex-wrap md:flex-nowrap justify-center p-6 gap-6">
            <div className="md:block w-full flex items-center justify-center">
              <img src={course} alt="" className="md:w-96 w-4/5" />
            </div>
            <div className="flex flex-col">
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
          <div className="flex flex-col gap-8 justify-center items-center m-6 ">
            <div className="text-5xl font-bold">Our Courses</div>
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
              <div className="m-6">
                <CourseSection startIndex={startIndex} currentId={currentId} initialCards={initialCards}/>
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
