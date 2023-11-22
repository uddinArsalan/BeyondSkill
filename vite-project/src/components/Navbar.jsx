// const navbar = document.querySelector("#navbar");
// import logo from "../logo/udacity.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import bold from "../logo/bold.png"
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useEffect } from "react";

const Navbar = ({ menu,setMenu }) => {
  // console.log(navbar)
  // window.onscroll = function (event){
  //   let scroll = window.pageYOffset;
  //   if(scroll > 200){
  //     navbar.classList.remove("bg-bodyBg");
  //     navbar.classList.add("bg-white");
  //     navbar.classList.add("shadow-lg")
  //   }else if(scroll== 0){
  //     navbar.classList.add("bg-bodyBg");
  //     navbar.classList.remove("bg-white");
  //     navbar.classList.remove("shadow-lg")
  //   }
  // }
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const [bar, setBar] = useState(false);

  useEffect(() => {
    if(isTabletOrLaptop){
      setBar(false)
      setMenu(false)
    }
  },[isTabletOrLaptop])

  return (
    <div>
    <div id="navbar" className="flex justify-between items-center p-8 z-10 bg-bodyBg transition-colors">
      <Link to="/">
      <div className="flex">
        <img src={bold} alt="logo" className="w-8" />
        <span className="text-2xl font-semibold">EYOND<span className="text-2xl text-red-400">SKILL</span> </span>
      </div>
      </Link>
      <div>
        <FontAwesomeIcon icon={menu ? faTimes : faBars} className='cursor-pointer text-xl lg:hidden flex' size="2x" onClick={() => {
          setBar(true)
          setMenu(prev => !prev)
          }}/>
      </div>
      <div className="hidden lg:flex justify-around w-3/5 items-center">
        <Link to="/"><div className="font-semibold hover:text-blue cursor-pointer" >
          Home
          <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
        </div></Link>
        <Link to="/course"><div className="font-semibold hover:text-blue cursor-pointer">
          Courses
          <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
        </div></Link>
        <a href="#about-us"><div className="font-semibold hover:text-blue cursor-pointer" >
          About Us
          <FontAwesomeIcon icon={faChevronDown} className='ml-1 '/>
        </div></a>
        <Link to = '/signIn'><div className="font-semibold">
          Sign In
          {/* <FontAwesomeIcon icon={faChevronDown} className='cursor-pointer ml-1'/> */}
        </div>
        </Link>
        <Link to="/start" ><button className="p-1 w-36 text-blue transition-colors border-blue text-base font-bold border-2 rounded-md hover:bg-blue hover:text-white">
          Get Started
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
