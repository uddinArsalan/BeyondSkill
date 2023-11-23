import React from "react"
import img1 from "../logo/pngwing.com.png"
import img2 from "../logo/pngwing.com (3).png"
import img3 from "../logo/pngwing.com (4).png"
import img4 from "../logo/pngwing.com (5).png"


const Sponsor = () => {
    return(
        <div className="mt-36">
            <div className="text-3xl font-semibold m-6 text-center">The trusted market leader in talent transformation.</div>
            <div className="flex justify-center items-center flex-wrap">
                <img src={img1} alt="" className="w-24 p-3"/>
                <img src={img2} alt="" className="w-24 p-3"/>
                <img src={img3} alt="" className="w-24 p-3"/>
                <img src={img4} alt="" className="w-24 p-3"/>
            </div>
        </div>
    )
}

export default Sponsor