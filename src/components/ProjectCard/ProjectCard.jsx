import React from 'react'
import './project-card.scss'
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({path, image, title, demoLink, codeLink, category}) => {

    function setColor(obj) {
        if(obj === 'UI design') return 'category-chip--red'
        if(obj === 'React') return 'category-chip--blue'
        return 'category-chip--green'
    }

    function manageButtons() {
      if(codeLink) 
        return <a target="_blank" className='button button--outlined' href={codeLink}> <GitHubIcon className='button__icon'/> See code</a>
      if(path === 'disabled') 
        return <></>
      return <a target="_blank" className='button button--outlined' href={path}> Case Study</a>
    }

  return (
    <div className="card">
        <img className="card__thumbnail" src={image} alt="real estate thumbnail"/>
        <div className="card__content">
            <div className="card__categories">{category.map(obj => <div className={`category-chip ${setColor(obj)}`}>{obj}</div>)}</div>
            <div className="card__title">{title}</div>
            <div className="card__buttons">
            {manageButtons()}
            <a target="_blank" className='button button--contained' href={demoLink}> See Demo</a>
         </div>
        </div>
    </div>
  )
}

export default ProjectCard