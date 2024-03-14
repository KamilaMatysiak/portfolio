import React, {useState} from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './carousel.scss'

const Carousel = () => {
    const categories = [
        {id: 1, name: 'All'},
        {id: 2, name: 'UI design'},
        {id: 3, name: 'React'},
        {id: 4, name: 'HTML&CSS'},
    ]
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [data, setData] = useState(projects);

    const filterProjects = (cat) => {
        setActiveCategory(cat.id);
        if (cat.id == '1') {
            setData(projects);
        }
        else {
            setData(projects.filter((item) => item.category.includes(cat.name)));    
        }
        
    }

    return (
        <div id="carousel">
            <h1 className='main-header'>MY PROJECTS</h1> 
            <div className='carousel'>
                <ul className='carousel-categories'>
                    {categories.map((cat) => (
                        <li 
                            key={cat.id} 
                            onClick={() => filterProjects(cat)} 
                            className={`carousel-categories__category ${cat.id == activeCategory && 'carousel-categories__category--active'}`}>
                                {cat.name}
                        </li>
                    ))}
                </ul>
                <div className='carousel__projects'>
                    {data.map((project, index) => (
                        <ProjectCard
                            key={index}
                            path={project.path}
                            image={project.image}
                            category={project.category}
                            realized={project.realized}
                            title={project.title}
                            codeLink={project.codeLink}
                            demoLink={project.demoLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel