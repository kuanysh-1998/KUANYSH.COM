import "./Nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { BiBook } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > <AiOutlineHome /> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <ImUser /> </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > <BiBook /> </a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} > <FaProjectDiagram /> </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  );
};

export default Nav;
