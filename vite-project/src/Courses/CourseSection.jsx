import React from "react";
import ReactStars from "react-rating-stars-component";

const CourseSection = ({ img, title,name,value}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="w-64 flex flex-col justify-center items-center p-4 rounded-md border-gray-200 border-2 cursor-pointer">
      <div className="font-bold text-xl">{title}</div>
      <img src={img} alt="" className="w-48 h-48 object-contain" />
      {/* <div className='text-gray-400'>{description}</div> */}
      <div className="flex flex-col ">
      <div className="text-sm text-gray-400">{name}</div>
      <div className="flex justify-evenly items-center">
        <span className="text-gray-600 mr-2 font-semibold">{value}</span>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          value={value}
          activeColor="#ffd700"
          isHalf={true}
        />
        <span className="ml-2 text-gray-400">256,923</span>
      </div>
      </div>
    </div>
  );
};

export default CourseSection;
