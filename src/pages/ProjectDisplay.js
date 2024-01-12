import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helper/ProjectList'
import { GitHub, Visibility } from '@material-ui/icons'
import '../styles/ProjectDisplay.css'
import { motion } from 'framer-motion'

function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
    return (
        <motion.div className='project'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p><b>Skills:</b> {project.skills}</p>
            <div className='links'>
                <Link to={project.gitHubLink} target='_blank'><GitHub /></Link>
                <Link to={project.webLink} target='_blank'><Visibility /></Link>
            </div>
        </motion.div>
    )
}

export default ProjectDisplay