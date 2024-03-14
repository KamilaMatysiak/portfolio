import React from 'react'
import styled from '@emotion/styled';
import { Container, CaseStudy, Banner, ContentContainer, Flexbox } from './CaseStudy'
import banner from '../../data/img/DT/banner.webp';
import grid from '../../data/img/DT/grid.svg';
import oldDesign from '../../data/img/DT/oldDesign.svg';
import heatmaps from '../../data/img/DT/heatmaps.svg';
import finalDesing from '../../data/img/DT/finalDesign.svg';
import useWindowDimensions from '../hooks/useWindowsDimensions';

const DeathTracker = () => {

    const {height, width} = useWindowDimensions();

    const primary = '#1F2421';
    const secondary = '#3E9762';

    const headerTextColor = '#333';
    const textColor = '#555';

    const CaseStudyTitle = styled.div`
        font-weight: 600;
        font-size: 3.5rem;
        margin: 8px 0;
        color: ${headerTextColor};
    `

    const CaseStudySubTitle = styled.div`
        font-weight: 500;
        font-size: 1rem;
        color: ${textColor};
    `

    const TextBox = styled.div`
        margin: 48px 0;
        padding: 0px 16px;
        border-left: 5px solid ${secondary};
    `

    const Header = styled.h2`
        color: ${props => (props.white ? '#fff' : headerTextColor)};
        font-size: 1.5rem;
        font-weight: 500;
    `

    const Paragraph = styled.p`
        max-width: 400px;
        color: ${props => (props.white ? '#fff' : textColor)};
        font-weight: 400;
    `

    const DarkContainer = styled.div`
        background: ${props => (props.secondary ? secondary : primary)};;
        width: 100%;
        padding: 32px 0;
    `

    const RoleLabel = styled.div`
        color: #fff;
        border: 1px solid #fff;
        border-radius: 16px;
        padding: 12px 16px;
        max-width: 200px;
        margin: 4px 16px;
    `

  return (
    <Container>
        <CaseStudy style={{background: '#F6FAF7'}}>
            <Banner src={banner}/>
            <ContentContainer>
                <CaseStudyTitle>Death Tracker</CaseStudyTitle>
                <CaseStudySubTitle>Service for Real Estate Agency with Admin Panel</CaseStudySubTitle>

                <TextBox>
                    <Header>Goal</Header>
                    <Paragraph>
                        The main goal of death Tracker is to mobilize young 
                        people to move. Each user receives a virtual avatar, 
                        the goal of which is to escape death. Each step made 
                        by the user extends the life of the avatar.
                    </Paragraph>
                </TextBox>
            </ContentContainer>
            <DarkContainer secondary>
                <Flexbox wrap justifyCenter>
                        <RoleLabel>UI Designer</RoleLabel>
                        <RoleLabel>High Fidelity Mockup</RoleLabel>
                        <RoleLabel>Prototyping</RoleLabel>
                        <RoleLabel>UX Designer</RoleLabel>
                </Flexbox>
            </DarkContainer>
            <ContentContainer>
                <TextBox>
                    <Header>Problem with the first design</Header>
                    <Paragraph>
                    Death Tracker was one of my first projects ever,
                    that’s why some design choices were quite questionable.
                    </Paragraph>
                </TextBox>
            </ContentContainer>
            <img width='100%' src={oldDesign}/>
            <ContentContainer>
                <TextBox>
                    <Header>How I fixed it</Header>
                    <Paragraph style={{maxWidth: "450px"}}>
                        I decided to ditch the dark background and go 
                        with a plain white background, which is a safer 
                        option for young designers. I fixed consistency 
                        in the button border radius. I choose an easier 
                        to read font and make sure all of my buttons 
                        have the right contrast and won’t be problematic to read.
                    </Paragraph>
                </TextBox>
            </ContentContainer>
            <DarkContainer>
                <ContentContainer style={{width: "80%", margin: '16px auto'}}>
                    <Flexbox spaceBetween alignCenter wrap>
                        <img width={width < 600 ? '80%' : '40%'} src={heatmaps}/>
                        <Paragraph white style={{maxWidth: "350px"}}>
                        Moreover, I decided to change the hamburger menu into a navigation drawer. Number of menu items could be easily reduced and the navigation drawer let’s users navigate easier because of the placement. According to heatmaps of the mobile devices, the left top corner is very hard to access and bottom placement is a lot more accessible and natural for our thumbs.
                        </Paragraph>
                    </Flexbox>
                </ContentContainer>
            </DarkContainer>
            <Flexbox spaceAround alignCenter wrap>
                <Paragraph>
                I put everything on a 8-point grid with 24px margins on the side. 
                I made 32px margins between groups and 16px or 8px inside of the components. 
                <br/><br/>
                To keep everything in place and make my design more responsive, 
                I used Auto Layout and Constrains.
                </Paragraph>
                <img width='40%' src={grid}/>
            </Flexbox>

            <ContentContainer>
                <TextBox>
                    <Header>Final Design</Header>
                </TextBox>
            </ContentContainer>
            
            <img width='100%' src={finalDesing}/>
        </CaseStudy>
    </Container>
  )
}

export default DeathTracker