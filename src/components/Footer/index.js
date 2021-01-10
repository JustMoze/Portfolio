import React from 'react'
import './styles.css'
import {FaGithub, FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer id="contact">
            <div className="icons">
                <a href="https://github.com/JustMoze" className="selfIcons">
                    <FaGithub size={30} color="#fff" />
                </a>
                <a href="https://www.instagram.com/modestasrimeikis/"  className="selfIcons">
                    <FaInstagram size={30} color="#fff" />
                </a>
                <a href="https://www.linkedin.com/in/modestas-rimeikis/"  className="selfIcons">
                    <FaLinkedin size={30} color="#fff" />
                </a>
                <a href="https://www.facebook.com/modestas.rimeikis"  className="selfIcons">
                    <FaFacebookSquare size={30} color="#fff" />
                </a>
            </div>
            <div className="copyright">
                <p>
                    © 2020 Modestas Rimeikis. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
