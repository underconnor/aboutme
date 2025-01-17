import { AnimateSharedLayout, motion, Variants } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import { ProjectItem, projects } from '../projects'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 30px;
`

const ProjectContainer = styled(motion.div)`
    background: #fff;
    color: #000;
    padding: 20px;
    border-radius: 20px;
`

const ProjectTitle = styled(motion.div)`
    font-size: 24px;
    font-weight: bold;
`

const ProjectDescription = styled(motion.div)`
    font-size: 16px;
`

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
}

const ProjectCard: React.FC<{
    id: string
    item: ProjectItem
}> = ({ id, item }) => {
    return (
        <ProjectContainer variants={itemVariants} layoutId={id}>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDescription>{item.description}</ProjectDescription>
        </ProjectContainer>
    )
}

const ItemsContainer = styled(motion.div)`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const projectsContainerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const Projects: React.FC = () => {
    return (
        <Container>
            <SectionTitle t="Projects" />
            <AnimateSharedLayout type="crossfade">
                <ItemsContainer
                    variants={projectsContainerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    {projects.map((x, i) => (
                        <ProjectCard item={x} key={i} id={i.toString()} />
                    ))}
                </ItemsContainer>
            </AnimateSharedLayout>
        </Container>
    )
}

export default Projects
