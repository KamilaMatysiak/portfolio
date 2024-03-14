import React, { useState } from 'react'
import { hobbies } from '../../data/hobbies'
import './hobbies.scss'

const Hobbies = () => {
  const [activeHobby, setActiveHobby] = useState(hobbies[0]);

  return (
    <>
      <h1 className='main-header'>MY HOBBIES</h1> 
      <div className='hobbies'>
        <div className='hobby-container'>
          {hobbies.map((hobby, i) => (
            <div key={i} onClick={() => setActiveHobby(hobby)}>
              <div className={`hobby-tile ${hobby === activeHobby && 'hobby-tile--active'}`}>
                <img className='hobby-tile__icon' src={hobby === activeHobby ? hobby.activeIcon : hobby.icon}/>
                <p className={`hobby-tile__name ${hobby === activeHobby && 'hobby-tile__name--active'}`}>{hobby.name}</p>
              </div>
            </div>
          ))}
        </div>
      
        <div className='hobby-card'>
          <pre className='hobby-card__text'>{activeHobby.description}</pre>
          <img className='hobby-card__img' src={activeHobby.img}/>
        </div>

      </div>
    </>
  )
}

export default Hobbies