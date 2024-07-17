import logo from "../assets/logo4.png";
import {FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className=" mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center ">
          <img src={logo} alt="logo"  className="w-20 h-20 rounded-full " />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-3xl">
         <a href="https://github.com/ZacGeo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a href="https://www.linkedin.com/in/george-zacharopoulos-2a87402a0/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a href="https://discordapp.com/users/zacha27" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
  
       </div>
    </nav>
    );
}; 
    

export default Navbar;