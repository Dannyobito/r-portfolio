import { Link } from "react-router-dom";
import git from '../../assets/github-icon.svg';
// import download from '../../assets/download-icon.png';
import linkedin from '../../assets/linkedin-icon.svg';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-links">
        <div className="footer-link">
          <Link to="https://github.com/dannyobito" className="link-icon-container">
            <img src={git} alt=""  className="intro-link-icons"/>
            <span className="link-icon-text">Github</span>
          </Link>
        </div>

        <div className="footer-link">
          <Link to="https://www.linkedin.com/in/oluwatobi-abayomi" className="link-icon-container">
            <img src={linkedin} alt=""  className="intro-link-icons"/>
            <span className="link-icon-text">LinkedIn</span>
          </Link>
        </div>

        {/* <div className="footer-link">
          <Link to="../../assets/oluwatobiabayomi.pdf" download className="link-icon-container">
            <img src={download} alt=""  className="intro-link-icons"/>
            <span className="link-icon-text">Resume</span>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Footer