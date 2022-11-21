import "./Nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"> <AiOutlineHome /> </a>
      <a href="#about"> <ImUser /> </a>
      <a href="#experience"> <BiBook /> </a>
      <a href="#services"> <RiServiceLine /> </a>
      <a href="#contact"> <BiMessageSquareDetail /> </a>
    </nav>
  );
};

export default Nav;
