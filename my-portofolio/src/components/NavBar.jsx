import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center ">
          <img src={logo} alt="logo" className="w-10 h-10" />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 test-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
       </div>
    </nav>
    );
}; 
    

export default Navbar;