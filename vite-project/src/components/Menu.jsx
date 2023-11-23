import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { auth } from "../signIn Component/firebase/firebase-config";
// import { useHistory } from 'react-router-dom';

const Menu = () => {
  let photoURL = auth.currentUser ? auth.currentUser.photoURL : "";
  // const history = useHistory()
  // const navigateToAboutUs = () => {
  //   // Use history to push the new location with the hash fragment
  //   history.push('/#about-us');
  // };

  return (
    <div className="bg-bodyBg flex flex-col justify-between h-screen xl:hidden p-8">
      <div className="flex flex-col h-screen">
        <Link to="/">
          <div className="flex justify-between p-6 items-center hover:text-blue cursor-pointer">
            <span className="text-xl font-semibold">Home</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
        <hr />

        <Link to="/about-us">
          <div className="flex justify-between p-6 items-center hover:text-blue cursor-pointer">
            <div className="text-xl font-semibold">About Us</div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </Link>
        <hr />
        <Link to="/course">
          <div className="flex justify-between items-center p-6 hover:text-blue cursor-pointer">
            <div className="text-xl font-semibold">Courses</div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </Link>
        <div className="p-6 flex justify-center items-center w-full">
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
      {auth.currentUser ? (
            <img src={photoURL} alt="" className="w-10 h-10 rounded-full" />
          ) : (
            <div className="bg-red-500 w-12 h-12 p-4 rounded-full flex justify-center items-center">
              <span className="text-white text-lg">Un</span>
            </div>
          )}
        <Link to="/signIn">
          <div className="font-semibold text-xl">Sign in</div>
        </Link>
        <Link to="/start">
          <div className="p-2 w-36 text-blue border-blue text-base font-bold border-2 rounded-lg hover:bg-blue hover:text-white text-center">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
