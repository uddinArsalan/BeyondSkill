import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useMediaQuery } from "react-responsive";
// import CoursesData from "./CoursesData";
import Checkout from "../components/Checkout";

const CourseSection = ({ startIndex, currentId,category, initialCards }) => {
  const [ coursesData,setCoursesData ]= useState([])
  useEffect(() => {
    fetch(`https://beyondskill-proxy.onrender.com/udemy-courses/${encodeURIComponent(category)}`)
      .then((response) => response.json())
        .then((data) => setCoursesData(data))

        // if(coursesData){
        //   console.log(coursesData[0].avg_rating)
        // }
  },[category])

  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  const isPhone = useMediaQuery({ query: "min-width : 768px" });
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  // visibleCourses = !isTablet ? CoursesData : visibleCourses
  // console.log("isTablet " + isTablet)
  // console.log("isPhone " + isPhone)
  // console.log(isPhone);
  //${currentId == id ? "lg:scale-110 " : ""}
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {coursesData.slice(startIndex, startIndex + initialCards).map(({ id, image_240x135, title, visible_instructors }) => (
        <div className={`p-4 rounded-md border border-gray-200`} key={id}>
          <div className="text-gray-500 text-xs font-bold mb-2">{id}</div>
          <div className="font-semibold text-lg mb-2">{title}</div>
          <img src={image_240x135} alt="" className="w-full h-48 object-contain mb-2" />
          <div className="text-sm text-gray-400 mb-1">{visible_instructors.display_name}</div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={18}
                value={4.98}
                activeColor="#ffd700"
                isHalf={true}
              />
              <span className="ml-1">4.8</span>
              <span className="ml-2 text-gray-400">256,923</span>
            </div>
            <Checkout imageUrl={image_240x135} id={id} title={title}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
