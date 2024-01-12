import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { Reorder } from '@material-ui/icons'
import { motion } from 'framer-motion'


function Navbar() {
    const [expandNavbar, setExpandNavbar] = React.useState(false)

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <nav className='navbar' id={expandNavbar ? "open" : "close"} >
            <div className="toggleButton">
                <button onClick={() => {
                    setExpandNavbar(!expandNavbar)
                }}>
                    <Reorder />
                </button>
            </div>
            <motion.div className="links"
            >
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </motion.div>
        </ nav>
    )
}

export default Navbar