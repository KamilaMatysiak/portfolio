import React from 'react'
import react from '../../data/icons/react.svg'
import ui from '../../data/icons/ui.svg'
import uni from '../../data/icons/uni.svg'
import './About.scss'

const About = () => {
  return (
    <div id="about">
        <h1 className='main-header'>ABOUT ME</h1>     
        <div className='about-section'>  
            <div className='about-card'>
                <img className='about-card__img' src={uni}/>
                <p className='about-card__paragraph'> 
                    I graduated IT at Adam Mickiewicz University with a Bachelor of Engineering degree. 
                    I’ve realized one project for a real client and participated in the redesign and 
                    implementation of a website during my internship.
                </p>
            </div>

            <div className='about-card'>
                <img className='about-card__img' src={ui}/>
                <p className='about-card__paragraph'> 
                    I’m interested in UI design. I’ve completed few online courses in this domain and trying 
                    to be up to date with all news. I have a lot of app ideas that quickly changes into Figma drafts.
                </p> 
            </div>

            <div className='about-card'>
                <img className='about-card__img' src={react}/>
                <p className='about-card__paragraph'> 
                    In summer 2022 I've discovered React and decided to learn more about it. I've realized a couple 
                    of projects using MUI library and Redux. I've also got some confidence with programming in node.js 
                    and express.js (MERN stack).
                </p>
            </div>
        </div>
    </div>
  )
}

export default About