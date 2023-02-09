import { Link } from "react-router-dom";
import bold from "../logo/bold.png";
const Nav = () => {
    return(
      <div className="p-10 bg-bodyBg z-10 border-gray-700">
        <Link to="/">
        <div className="flex">
         <img src={bold} alt="logo" className="w-8" />
          <span className="text-2xl font-semibold">
            EYOND<span className="text-2xl text-red-400">SKILL</span>
          </span>
        </div>
        </Link>
      </div>

    )
}

export default Nav