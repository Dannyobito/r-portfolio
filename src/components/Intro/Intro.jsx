import { Link } from "react-router-dom";
import git from '../../assets/github-icon.svg';
import gmail from '../../assets/gmail-icon.svg';
import linkedin from '../../assets/linkedin-icon.svg';
import './Intro.css'
const Intro = () => {
  return (
    <div className="intro-section container fade-in">
        <div className="intro-section-content">
          <h1 className="intro-heading">
            Hi, {`I'm`} <span className="highlight">Obito</span> | <span className="highlight">Front-end Developer</span>
          </h1>

          <div className="intro-description">
            <p className="intro-subheading">
              Turning <span className="highlight">fun ideas</span> into <span className="highlight">reality</span> by
              <span className="highlight">   building</span>
            </p>
            <p className="intro-subheading">
              <span>especially if you have a design,...</span>
            </p>
            <p className="intro-subheading-2">Currently <span className="highlight">open</span> to <span className="highlight">jobs</span></p>
          </div>

          <div className="flex-center">
            <Link to={'https://www.linkedin.com/in/oluwatobi-abayomi'} className="intro-link-icon-container">
              <img src={linkedin} alt=""  className="intro-link-icons"/>
              <span className="intro-link-icon-text">LinkedIn</span>
            </Link>
            <Link to="https://github.com/dannyobito" className="intro-link-icon-container">
              <img src={git} alt="" className="intro-link-icons"/>
              <span className="intro-link-icon-text">Github</span>
            </Link>
              <Link to="" className="intro-link-icon-container">
              <img src={gmail} alt="" className="intro-link-icons"/>
              <span className="intro-link-icon-text">Email</span>
            </Link>
          </div>

        <a href="#about">
          <div className="arrow-link">
            <svg className="dropdown-icon" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Intro;