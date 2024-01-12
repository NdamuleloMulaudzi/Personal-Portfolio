import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Facebook, LinkedIn } from '@material-ui/icons'
import { FaXbx } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <Link to="https://github.com/NdamuleloMulaudzi" target="_blank"><Twitter /></Link>
                <Link to="https://www.facebook.com/ndamulelo.mulaudzi.522" target="_blank"><Facebook /></Link>
                <Link to="https://             www.linkedin.com/in/
ndamulelo-mulaudzi-745a58250" target="_blank"><LinkedIn /></Link>


            </div>
            <p>&copy; 2024 Ndamulelo</p>
        </div>
    )
}

export default Footer