import React from 'react'
import { motion } from 'framer-motion'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../helper/ProjectList'

const projectsVariant = {
    initial: {
        opacity: 0,
        y: 1200
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.03, type: 'spring', stiffness: 45 }
    }

}
function Projects() {
    return (
        <motion.div className='projects'
            variants={projectsVariant}
            initial="initial"
            animate="animate"

        >
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return <ProjectItem id={idx} name={project.name} image={project.image} />
                })}
            </div>
        </motion.div>
    )
}

export default Projects