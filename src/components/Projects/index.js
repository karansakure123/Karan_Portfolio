import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');

  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((project) => project.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {['all', 'MERN Stack', 'React Js'].map(category => (
            <>
              <ToggleButton 
                key={category}
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              <Divider />
            </>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects;
