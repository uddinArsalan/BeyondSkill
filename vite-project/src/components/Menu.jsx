import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="bg-bodyBg flex flex-col justify-between h-screen xl:hidden p-8">
            <div className="flex flex-col h-screen">
        <div className="flex justify-between p-6 items-center hover:text-blue cursor-pointer">
            <div className="text-xl font-semibold">For Enterprise </div>
            <div><FontAwesomeIcon icon={faChevronRight} /></div>
        </div>
        <hr />
        <div className="flex justify-between p-6 items-center hover:text-blue cursor-pointer">
            <div className="text-xl font-semibold">For Government</div>
            <div><FontAwesomeIcon icon={faChevronRight} /></div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-6 hover:text-blue cursor-pointer">
            <Link to="/course" ><div className="text-xl font-semibold">Our Courses</div></Link>
            <div><FontAwesomeIcon icon={faChevronRight} /></div>
            </div>
        </div>
        <div className="flex flex-col items-center">
        <Link to="/signIn"><div className="font-semibold text-xl">Sign in</div></Link>
        <Link to="/start" ><div className="p-1 mt-4 w-36 text-blue border-blue text-base font-bold border-2 rounded-lg hover:bg-blue hover:text-white text-center">Get Started</div></Link>
        </div>
        </div>
    )
}

export default Menu