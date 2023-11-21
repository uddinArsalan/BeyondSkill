import React from "react";
// import backG from "../logo/hannah-olinger-NXiIVnzBwZ8-unsplash.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const styles = {
//     background: url('../logo/pathum-danthanarayana-kBY8uhuvnT8-unsplash.jpg')
// }

const Contact = () => {
  return (
    <div className="mt-24 bg-contact bg-cover bg-no-repeat bg-center">
      <div className="flex justify-center items-center flex-col p-12">
        <div className="text-5xl font-semibold mb-14 text-center text-white">
          Transforming lives, businesses, and nations.
        </div>
        <div className="bg-btnColor w-40 p-4 font-semibold flex justify-between items-center hover:bg-lime-400 cursor-pointer rounded-md">
          <span>Get in touch</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
