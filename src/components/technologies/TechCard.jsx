import React from 'react'

const TechCard = ({logo, name, color}) => {
  return (
    <div className='tech-card'>
      <div className='tech-card__content'>
        <img className='tech-card__logo' src={logo}/>
        <p className='tech-card__name' style={{background: color}}>{name}</p>
      </div>
    </div>
  )
}

export default TechCard