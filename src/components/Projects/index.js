import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From static web apps to dynamic web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'major web app' ?
            <ToggleButton active value="major web app" onClick={() => setToggle('major web app')}>MAJOR WEB APP'S</ToggleButton>
            :
            <ToggleButton value="major web app" onClick={() => setToggle('major web app')}>MAJOR WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'minor web app' ?
            <ToggleButton active value="minor web app" onClick={() => setToggle(' minor web app')}> MINIWEB APP'S</ToggleButton>
            :
            <ToggleButton value="minor web app" onClick={() => setToggle('minor web app')}> MINI WEB APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects