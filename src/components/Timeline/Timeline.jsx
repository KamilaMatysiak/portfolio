import React from 'react'
import {Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator, TimelineDot} from '@mui/lab';
import {technologies} from '../../data/techs'
import './Timeline.scss'

const Experience = () => {
  return (
    <div id="experience">
        <h1 className='main-header'>EXPIERENCE</h1> 
        <Timeline position="alternate">
            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-item__separator'>
                <TimelineDot className='timeline-item__dot'/>
                <TimelineConnector className='timeline-item__connector' />
                </TimelineSeparator>
                <TimelineContent className='timeline-content'>
                    <p className='timeline-content__date'>10/2018</p>
                    <h5 className='timeline-content__header'>Adam Mickiewicz University</h5>
                    <p className='timeline-content__desc'>Computer Science studies.</p>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-item__separator'>
                <TimelineDot className='timeline-item__dot'/>
                <TimelineConnector className='timeline-item__connector' />
                </TimelineSeparator>
                <TimelineContent className='timeline-content'>
                    <p className='timeline-content__date'>06/2021</p>
                    <h5 className='timeline-content__header'>RTG Medix</h5>
                    <p className='timeline-content__desc'>Freelance job, simple informational site using html, css and js. </p>
                    <div className='timeline-icons'>
                        <img className='timeline-icons__icon' src={technologies[0].logo}/>
                        <img className='timeline-icons__icon' src={technologies[1].logo}/>
                        <img className='timeline-icons__icon' src={technologies[2].logo}/>
                        <img className='timeline-icons__icon' src={technologies[4].logo}/>
                    </div>

                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-item__separator'>
                <TimelineDot className='timeline-item__dot'/>
                <TimelineConnector className='timeline-item__connector' />
                </TimelineSeparator>
                <TimelineContent className='timeline-content'>
                    <p className='timeline-content__date'>07/2021</p>
                    <h5 className='timeline-content__header'>COBORU Internship</h5>
                    <p className='timeline-content__desc'>Redesign of websites and intemplementation using ASP.NET, html, css, js and bootstrap.</p>
                    <div className='timeline-icons timeline-icons--right'>
                        <img className='timeline-icons__icon' src={technologies[0].logo}/>
                        <img className='timeline-icons__icon' src={technologies[1].logo}/>
                        <img className='timeline-icons__icon' src={technologies[2].logo}/>
                        <img className='timeline-icons__icon' src={technologies[4].logo}/>
                        <img className='timeline-icons__icon' src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'/>
                        <img className='timeline-icons__icon' src='https://www.bytehide.com/blog/wp-content/uploads/2023/01/aspdotnet7-preview-2-Blog.png'/>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-item__separator'>
                <TimelineDot className='timeline-item__dot'/>
                <TimelineConnector className='timeline-item__connector' />
                </TimelineSeparator>
                <TimelineContent className='timeline-content'>
                    <p className='timeline-content__date'>02/2022</p>
                    <h5 className='timeline-content__header'>vTo-Do</h5>
                    <p className='timeline-content__desc'>UI/UX design and implementation using django framework with Bootstrap and vanilla Javascript</p>
                    <div className='timeline-icons'>
                        <img className='timeline-icons__icon' src={technologies[0].logo}/>
                        <img className='timeline-icons__icon' src={technologies[1].logo}/>
                        <img className='timeline-icons__icon' src={technologies[2].logo}/>
                        <img className='timeline-icons__icon' src={technologies[4].logo}/>
                        <img className='timeline-icons__icon' src={technologies[5].logo}/>
                        <img className='timeline-icons__icon' src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'/>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-item__separator'>
                <TimelineDot className='timeline-item__dot'/>
                </TimelineSeparator>
                <TimelineContent className='timeline-content'>
                    <p className='timeline-content__date'>Now</p>
                    <h5 className='timeline-content__header'>Self-taught</h5>
                    <p className='timeline-content__desc'>Spending time learning React, exploring new technologies and mastering frontend skills.</p>
                    <div className='timeline-icons  timeline-icons--right'>
                        <img className='timeline-icons__icon' src={technologies[3].logo}/>
                        <img className='timeline-icons__icon' src='https://sass-lang.com/assets/img/styleguide/seal-color-reversed-c50d9b78.png'/>
                        <img className='timeline-icons__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'/>
                        <img className='timeline-icons__icon' src='https://nodejs.org/static/images/logo-hexagon-card.png'/>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default Experience