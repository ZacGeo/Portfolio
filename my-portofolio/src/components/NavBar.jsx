import logo from "../assets/logo4.png";
import {FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className=" mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center ">
          <img src={logo} alt="logo"  className="w-20 h-20 rounded-full "/>
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
       </div>
    </nav>
    );
}; 
    

export default Navbar;