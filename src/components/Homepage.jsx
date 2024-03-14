import React from 'react'
import styled from '@emotion/styled';
import Carousel from './Carousel/Carousel';
import Banner from './Banner/Banner';
import Technologies from './technologies/Technologies';
import Hobbies from './Hobbies/Hobbies';
import About from './About/About';
import Experience from './Timeline/Timeline';

const Homepage = () => {

    const HomepageContainer = styled.div`
        flex: 1;
        width: 100%;
        margin: 70px auto auto auto;
    `


  return (
    <HomepageContainer>
        <Banner />
        
        <div className='section'>
            <Carousel/>
        </div>

        <div className='section'>
            <About/>
        </div>

        <div className='section'>
            <Hobbies/>
        </div>

        <div className='section'>
            <Technologies/>
        </div>

        <div className='section'>
            <Experience/>
        </div>
        
    </HomepageContainer>
  )
}

export default Homepage