import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useMediaQuery } from "react-responsive";
import CoursesData from "./CoursesData";

const CourseSection = ({ startIndex, currentId,initialCards }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  const isPhone = useMediaQuery({ query: "min-width : 768px" });
  let visibleCourses = CoursesData.slice(startIndex, startIndex + initialCards);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  // visibleCourses = !isTablet ? CoursesData : visibleCourses
  // console.log("isTablet " + isTablet)
  // console.log("isPhone " + isPhone)
  // console.log(isPhone);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {visibleCourses.map(({ id, image, title, instructor, value }) => (
        <div className="p-4 rounded-md border border-gray-200" key={id}>
          <div className="text-gray-500 text-xs font-bold mb-2">{id}</div>
          <div className="font-semibold text-lg mb-2">{title}</div>
          <img src={image} alt="" className="w-full h-48 object-cover mb-2" />
          <div className="text-sm text-gray-400 mb-1">{instructor}</div>
          <div className="flex items-center text-sm text-gray-600">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={18}
              value={value}
              activeColor="#ffd700"
              isHalf={true}
            />
            <span className="ml-1">{value}</span>
            <span className="ml-2 text-gray-400">256,923</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
