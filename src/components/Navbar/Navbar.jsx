import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../data/icons/logo.svg'
import github from '../../data/icons/github.svg'
import linkedin from '../../data/icons/linkedin.svg'
import './navbar.scss'
import { Link } from 'react-scroll'
import { useLocation  } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation()
  console.log(location);

  return (
    <div className={`navbar ${location.pathname === '/' && 'navbar--fixed'}`}>
        <NavLink className="header" to='/'><img className='header__icon' src={logo} alt="Kamila Matysiak"/></NavLink>
        
        {location.pathname === '/' && (
          <div className='nav-menu'>
            <Link to="carousel" spy={true} smooth={true} className='nav-menu__link' activeClass='nav-menu__link--active'>PROJECTS</Link>
            <Link to="about" spy={true} smooth={true} className='nav-menu__link' activeClass='nav-menu__link--active'>ABOUT ME</Link>
            <Link to="techs" spy={true} smooth={true} className='nav-menu__link' activeClass='nav-menu__link--active'>TECHNOLOGIES</Link>
            <Link to="experience" spy={true} smooth={true} className='nav-menu__link' activeClass='nav-menu__link--active'>EXPERIENCE</Link>
            <Link to="contact" spy={true} smooth={true} className='nav-menu__link' activeClass='nav-menu__link--active'>CONTACT</Link>
          </div>
        )}

        <div className='nav-content'>
            <NavLink className='nav-content__link' to='https://www.linkedin.com/in/kamila-matysiak/' target="_blank"><img className='nav-content__icon' src={linkedin} alt="LinkedIn"/></NavLink>
            <NavLink className='nav-content__link' to='https://github.com/KamilaMatysiak/' target="_blank"><img className='nav-content__icon' src={github} alt="Github"/></NavLink>
        </div>
    </div>
  )
}

export default Navbar