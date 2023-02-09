import React from "react"
// import backG from "../logo/hannah-olinger-NXiIVnzBwZ8-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// const styles = {
//     background: url('../logo/pathum-danthanarayana-kBY8uhuvnT8-unsplash.jpg')
// }

const Contact = () => {
    return(
        <div className="mt-24 bg-[url('C:\Users\dell\Desktop\Coursera\vite-project\src\logo/pathum-danthanarayana-kBY8uhuvnT8-unsplash.jpg')]">
        <div className="flex justify-center items-center flex-col">
            <div className="text-5xl p-8 pb-0 font-semibold mb-14 text-center text-white">Transforming lives, businesses, and nations.</div>
            <div className="bg-btnColor w-40 p-4 m-8 flex justify-between items-center hover:bg-lime-300 cursor-pointer rounded-md">Get in touch <span className=""><FontAwesomeIcon icon={faArrowRight} /> </span></div>
        </div>
        </div>
    )
}

export default Contact