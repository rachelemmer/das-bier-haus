import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <br></br>
            <Link to='About'>About</Link>
            <br></br>
            <Link to='Contact'>Contact</Link>
        </nav>
    )
}