import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Resume from '../assets/NdamuleloMulaudziResume.pdf'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import { motion } from 'framer-motion'

const skillsVariant = {
    initial: {
        opacity: 0,
        x: 1200
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.03,
            type: 'spring',
            stiffness: 45,
            when: "afterChildren"
        }
    }
}

const buttonVariant = {
    hover: {
        scale: 1.2,
        texthadow: "0px 0px 8px  rgb(244, 184, 73)",
        boxShadow: "0px 0px 8px white"
    }
}

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, I'm Ndamulelo</h2>
                <div className="prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, backgroundColor: "#21325e" }}
                    transition={{ delay: 1.5 }}>
                    <p>Welcome to my digital canvas, I'm a passionate <span className='jobDes'>Frontend Developer</span> weaving creativity and functionality into seamless web designs. Step into a world where code meets creativity, and let's embark on a journey through innovative interfaces and captivating user experiences</p>
                    <Link to="https://www.linkedin.com/in/ndamumulaudzi"
                        target="_blank"
                    ><LinkedIn /></Link>
                    <Link to="mailto:ndamulel.mulaudzi@gmail.com" target="_blank"><Email /></Link>
                    <Link to="https://github.com/NdamuleloMulaudzi" target="_blank"><GitHub /></Link>
                    <div className='resume'>
                        <a href="Resume" download={Resume}><motion.button
                            variants={buttonVariant}
                            whileHover="hover">Resume</motion.button></a>
                    </div>
                </div>
            </div>

            <motion.div className="skills"
                variants={skillsVariant}
                initial="initial"
                animate="animate">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="items">
                        <h2>Front-End</h2>
                        <span>
                            ReactJs, Redux, HTML, CSS, BootStrap, Framer Motion, NPM, Jquery, MaterialUI
                        </span>
                    </li>
                    <li className="items">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Python, C#
                        </span>
                    </li>
                </ol>
            </motion.div>
        </div>
    )
}

export default Home