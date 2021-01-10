import React, {useEffect} from 'react'
import NavLink from '../NavLink/index'
import $ from 'jquery';
import './styles.css'

export default function Navbar() {
    useEffect(() => {
		$(window).on('scroll', () => {
			if ($(window).scrollTop()) {
				$('nav').addClass('black');
				$('nav ul ul').addClass('navulul');
			} else {
				$('nav').removeClass('black');
				$('nav ul ul').removeClass('navulul');
			}
		});
    }, []);
    
    return (
        <>
            <nav>
                <div onClick={() => window.scrollTo(0, 0)}>
                    Modestas
                </div>
                <ul>
                    <NavLink route="#projects" name="Projects"/>
                    <NavLink route="#aboutme" name="About"/>
                    <NavLink route="#contact" name="Contact me"/>
                </ul>
            </nav>
        </>
    )
}