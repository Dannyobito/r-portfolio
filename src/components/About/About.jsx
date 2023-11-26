import { useState } from 'react'
import myImage from '../../assets/photo.jpg'
import './About.css'

const About = () => {
  const [activeAboutTab, setActiveAboutTab] = useState('skills')
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={myImage} alt=""/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore commodi aspernatur possimus non aperiam molestias atque, facilis suscipit tenetur blanditiis perspiciatis animi nulla quidem nesciunt ratione ipsa sit laudantium.</p>

                    <div className="tab-titles">
                        <p className={`tab-links ${activeAboutTab === 'skills' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('skills')}}>Skills</p>
                        <p className={`tab-links ${activeAboutTab === 'experience' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('experience')}}>Experience</p>
                        <p className={`tab-links ${activeAboutTab === 'education' ? 'active-link' : ''}`} onClick={()=>{setActiveAboutTab('education')}}>Education</p>
                    </div>
                    <div className={`tab-contents ${activeAboutTab === 'skills' ? 'active-tab' : ''}`} id="Skills">
                        <ul>
                            <li><span>UI/UX</span><br/>Designing Web/App Interfaces</li>
                            <li><span>Web Development</span><br/>Web app Development</li>
                            <li><span>App Development</span><br/>Building Android/iOS apps</li>
                        </ul>
                    </div>
                    <div className={`tab-contents ${activeAboutTab === 'experience' ? 'active-tab' : ''}`} id="Experience">
                        <ul>
                            <li><span>2021 - Current</span><br/>UI/UX Design Training at ET Institution</li>
                            <li><span>2017 - 2021</span><br/>Team Lead at StarApp LLC.</li>
                            <li><span>2015 - 2017</span><br/>UI/UX Design Excutive at Coin Digital LTD </li>
                            <li><span>2014 -2015</span><br/>Internship at ekart eCommerce. </li>
                        </ul>
                    </div>
                    <div className={`tab-contents ${activeAboutTab === 'education' ? 'active-tab' : ''}`} id="Education">
                        <ul>
                            <li><span>2015</span><br/>Designing Web/App Interfaces</li>
                            <li><span>2015</span><br/>MBA from MIT Bangalore</li>
                            <li><span>2013</span><br/>BBA from ISM Bangalore.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;