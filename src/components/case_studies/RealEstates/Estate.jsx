import React, { useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { motion, useScroll, useSpring, useInView } from 'framer-motion'

import banner from '../../../data/img/RE/Banner.webp'
import brainstorm from '../../../data/img/RE/brainstorm.webp'
import mockup from '../../../data/img/RE/mockup.webp'
import sitemap from '../../../data/img/RE/sitemap.webp'
import grid from '../../../data/img/RE/grid.webp'
import finalDesign from '../../../data/img/RE/finaldesign.webp'
import logos from '../../../data/img/RE/logos.webp'
import finalLogo from '../../../data/img/RE/finallogo.svg'
import userFlow from '../../../data/img/RE/userflow.webp'
import wireframe from '../../../data/img/RE/wireframe.webp'
import pallete from '../../../data/img/RE/pallete.svg'
import typography from '../../../data/img/RE/typography.svg'

import './real-estate.scss'

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="cs__section">
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s"
        }}
      >
        {children}
      </span>
    </section>
  )
}

const Image = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="img">
      <span
        className='img__span'
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s"
        }}
      >
        {children}
      </span>
    </section>
  )
}

const Estate = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="real-estate-container">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <a href="/" className="go-back"><ChevronLeftIcon/></a>
      <div className="re-banner" style={{ backgroundImage: `url('${banner}')`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="real-estate-container__content">
        <Section>
          <div className="chips-container">
            <div className="chips-container__chip chips-container__chip--red">UI design</div>
            <div className="chips-container__chip chips-container__chip--blue">React</div>
          </div>

          <div className="cs-header">
            <h1 className="cs-header__title">Real Estates</h1>
            <p className="cs-header__subtitle">Service for Real Estate Agency with Admin Panel</p>
          </div>

          <div className="cs-links cs-links--alignCenter">
            <a target="_blank" href='https://www.figma.com/proto/d6sqy0TlHKUTvlGzuRHUtl/Estate-Agency?node-id=39%3A460&scaling=scale-down&page-id=0%3A1&starting-point-node-id=39%3A460&show-proto-sidebar=1' className="cs-button cs-button--primary"><span className="cs-button__play">See Prototype</span></a>
            <a target="_blank" href='https://github.com/KamilaMatysiak/react-estate-agency' className="cs-button cs-button--outlined"><span className="cs-button__git"><GitHubIcon fontSize="small" /></span></a>
          </div>
        </Section>
        <Section>
          <div className="cs__section cs__section--space-between">
            <div className='section'>
              <h2 className="section__header">What is Real Estate?</h2>
              <p className="section__text">
                Real Estate is a website project designed for an imaginary Estate Agency.
                The project contains a landing page and CMS admin panel. The main goal
                was to make a modern looking website but easy to implement. I realized
                this project in a team of 3 people.
              </p>
            </div>
            <img src={mockup} className="section__img--small section__img--mockup" alt="mockup" />
          </div>
        </Section>
        <Section>
          <div className="cs__section cs__section--space-between">
            <img src={brainstorm} className="section__img--small img__margin" alt="brainstorm" />

            <div className='section'>
              <h2 className="section__header">First steps</h2>
              <p className="section__text">
                I’ve started my design process with a brainstorm.
                We sat down and started planning what we should
                include in our project. We used <strong>miro </strong>
                to visualize our thoughts and ideas. Then I composed
                a site map for our project.
              </p>
            </div>


          </div>
        </Section>

        <Image>
          <img src={sitemap} className="section__img--medium" alt="sitemap" />
        </Image>

        <Section>
          <h2 className="section__header"> Task Flow</h2>
        </Section>

        <Image>
          <img src={userFlow} className="section__img--full-width" alt="tasksFlows" />
        </Image>

        <Section>
          <h2 className="section__header">Design</h2>
        </Section>

        <Image>
          <img src={wireframe} className="section__img--full-width" alt="wireframes" />
        </Image>

        <Image>
          <img src={typography} className="section__img--full-width" alt="typography" />
        </Image>

        <Image>
          <img src={pallete} className="section__img--medium" alt="color palette" />
        </Image>

        <Section>
          <h2 className="section__header">Grid</h2>
        </Section>

        <Image>
          <img src={grid} className="section__img--full-width" alt="grid" />
        </Image>

        <Section>
          <div className="cs__section cs__section--space-between">
            <div className='section'>
              <h2 className="section__header">Logo Design</h2>
              <p className="section__text">
                The logo for Real Estate needed to be modern and simple.
                I’ve started to combine the letters R and E. I also wanted
                to emphasize the connection to estates. I presented a few of
                my concepts to other team members and we chose the logo together.
              </p>
            </div>

            <img src={logos} className="section__img--xsmall" alt="logos" />
          </div>
        </Section>

        <Image>
          <img src={finalLogo} className="section__img--full-width" alt="final logo design" />
        </Image>

        <Section>
          <h2 className="section__header">Final Design</h2>
        </Section>

        <Image>
          <img className="section__img--full-width" src={finalDesign} alt="final design screens" />
        </Image>
      </div>
    </div>
  )
}

export default Estate