import { useState } from 'react'
import myImage from '../../assets/photo.jpg'
import './About.css'

const About = () => {
  const [activeAboutTab, setActiveAboutTab] = useState('skills')
  return (
    <section name="about">
        <div className="about-container">
        <h1 className="sub-title">About Me</h1>

            <div className="row">
                <div className="about-col-1">
                    <span><img src={myImage} alt=""/></span>
                </div>
                <div className="about-col-2">
                    <div className='sm-padding'>

                        <div className="tab-titles">
                            <p className={`tab-links ${activeAboutTab === 'skills' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('skills')}}>Skills</p>
                            <p className={`tab-links ${activeAboutTab === 'experience' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('experience')}}>Experience</p>
                            <p className={`tab-links ${activeAboutTab === 'education' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('education')}}>Education</p>
                        </div>
                        <div className={`tab-contents ${activeAboutTab === 'skills' ? 'active-tab' : ''}`} id="Skills">
                            <ul>
                                <li><span>Front End Web Development</span><br/>I can design the frontend of web applications.</li>
                                <li><span>Backend Web Development</span><br/>I can develop the backend of web applications</li>
                                <li><span>App Development</span><br/>Building Android/iOS apps with Flutter and React Native</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeAboutTab === 'experience' ? 'active-tab' : ''}`} id="Experience">
                            <ul>
                                <li><span>July 2023 - December 2023</span><br/>Developer Intern at Teksphere Global Services</li>
                                <li><span>2017 - 2021</span><br/>Front End Development Team Lead at NACOS UNILORIN.</li>
                                <li><span>October 2023 - Current</span><br/>Front End Developer at Rent4U</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeAboutTab === 'education' ? 'active-tab' : ''}`} id="Education">
                            <ul>
                                <li><span>2019-2024(Ongoing)</span><br/>B.Sc Computer Science, University of Ilorin.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;