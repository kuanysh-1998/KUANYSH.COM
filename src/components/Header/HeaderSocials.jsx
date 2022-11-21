import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="http://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      ><BsLinkedin /></a>
      <a
        href="https://github.com/kuanysh-1998?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.instagram.com/kuanysh_aptaizhanov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
