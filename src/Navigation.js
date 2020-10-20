import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './dasbierhaus.png'


export default function Navigation() {
    return (
        <nav className="nav-bar">
            <Link to="/"><img className="logo" src={Logo} alt="das bier haus logo with stein"></img></Link>
            <Link to='Services' className="link">Services</Link>
            <Link to='Menu' className="link">Menu</Link>
            <Link to='About' className="link">About</Link>
            <Link to='Contact' className="link">Contact</Link>
        </nav>
    )
}