import React, { useEffect, useState,Fragment } from "react";
import ReactStars from "react-rating-stars-component";
// import { useMediaQuery } from "react-responsive";
// import CoursesData from "./CoursesData";
import Checkout from "../components/Checkout";

const RenderSkeleton = ({ initialCards }) => {
  return (
    <Fragment>
    {Array.from({length : initialCards}).map((_, index) => (
      <div key={index} className="bg-gray-800 animate-pulse p-4 rounded-md flex flex-col">
        <div className="bg-gray-700 p-2 rounded-md mb-2"></div>
        <div className="flex flex-col gap-2 mb-3">
          <div className="bg-gray-700 p-2 w-full rounded-md"></div>
          <div className="bg-gray-700 p-2 w-full rounded-md"></div>
          <div className="bg-gray-700 p-2 w-full rounded-md"></div>
        </div>
        <div className="object-cover h-48 w-full mb-3 bg-gray-700 rounded-md"></div>
        <div className="bg-gray-700 mb-1 p-2 w-36 rounded-md"></div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 justify-center">
            <div className="bg-gray-700 w-24 rounded-md"></div>
            <span className="ml-1 bg-gray-700 p-1 rounded-md"></span>
            <div className="flex gap-2">
            <span className="bg-gray-700 rounded-md"></span>
            <span className="bg-gray-700 p-2 w-16 rounded-md"></span>
            </div>
          </div>
          <div className="bg-gray-700 p-4 w-32 rounded-md"></div>
        </div>
      </div>
    ))}
    </Fragment>
  )
};

const CourseSection = ({ startIndex, currentId, category, initialCards }) => {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://beyondskill-proxy.onrender.com/udemy-courses/${encodeURIComponent(
        category
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoursesData(data);
        setLoading(false);
      });

    // if(coursesData){
    //   console.log(coursesData[0].avg_rating)
    // }
  }, [category]);

  // const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isPhone = useMediaQuery({ query: "min-width : 768px" });
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  // visibleCourses = !isTablet ? CoursesData : visibleCourses
  // console.log("isTablet " + isTablet)
  // console.log("isPhone " + isPhone)
  // console.log(isPhone);
  //${currentId == id ? "lg:scale-110 " : ""}
  console.log(loading);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
      {loading
        ? <RenderSkeleton initialCards={initialCards} />
        : coursesData
            .slice(startIndex, startIndex + initialCards)
            .map(({ id, image_240x135,image_480x270, title, visible_instructors }) => (
              <div className={`p-4 rounded-md border border-gray-200 `} key={id}>
                <div className="text-gray-500 text-xs font-bold mb-2">{id}</div>
                <div className="font-semibold text-lg mb-2">{title}</div>
                <img
                  src={image_480x270}
                  alt=""
                  className="w-full object-cover mb-2"
                />
                <div className="text-sm text-gray-400 mb-1">
                  {visible_instructors[0].display_name}
                </div>
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
                  <Checkout imageUrl={image_240x135} id={id} title={title} />
                </div>
              </div>
            ))}
    </div>
  );
};

export default CourseSection;
