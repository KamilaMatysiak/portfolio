import React from 'react'
import banner from '../../data/img/banner.png'
import './banner.scss'

import {Link} from 'react-scroll'

const Banner = () => {

  return (
    <div className='banner'>
        <div className='banner__text-container'>
          <p className='banner__text'>Welcome to my portfolio</p>
          <h1 className='banner__header'>KAMILA MATYSIAK</h1>
          <p className='banner__subheader'>WEB DESIGN AND DEVELOPMENT</p>
          <div className='banner__actions'>
            <Link to="contact" spy={true} smooth={true} className='button button--contained'>Contact</Link>
            <Link to="carousel" spy={true} smooth={true} className='button button--outlined'>See my projects</Link>
          </div>
        </div>
        <img src={banner} className='banner__img'/>
    </div>
  )
}

export default Banner