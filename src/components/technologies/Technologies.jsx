import React from 'react'
import {technologies} from '../../data/techs'
import TechCard from './TechCard'
import './technologies.scss'

const Technologies = () => {
  return (
    <div id="techs">
      <h1 className='main-header'>TECHNOLOGIES</h1> 
      <div className='technologies-container'>
      {technologies.map((obj, index) => (
          <TechCard key={index} name={obj.name} logo={obj.logo} color={obj.color}/>
      ))}
      </div>
    </div>
  )
}

export default Technologies