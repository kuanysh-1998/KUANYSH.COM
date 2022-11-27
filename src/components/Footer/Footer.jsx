import "./Footer.css";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        KUANYSH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/kuanysh_aptaizhanov/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://t.me/Kuanysh_Aptaizhanov" target="_blank">
          <BsTelegram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=89777024276" target="_blank">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KUANYSH Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
