import styled from '@emotion/styled'
import React from 'react'
import gh from '../../data/icons/github-white.svg'
import fb from '../../data/icons/facebook-white.svg'
import li from '../../data/icons/linkedin-white.svg'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer' id="contact">
      <div className='footer__content'>
        <h2 className='footer__header'>CONTACT ME</h2>
        <h1 className='footer__mail'>kamila_matysiak@outlook.com</h1>
        <div className='icon-box'>
          <a target="_blank" className='icon-box__link' href="https://www.facebook.com/kamila.matysiak.16/" ><img className="icon-box__icon" src={fb}/></a>
          <a target="_blank" className='icon-box__link' href="https://www.linkedin.com/in/kamila-matysiak/"><img className="icon-box__icon" src={li}/></a>
          <a target="_blank" className='icon-box__link' href="https://github.com/KamilaMatysiak"><img className="icon-box__icon" src={gh}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer