import React from 'react'
import Logo from './dasbierhaus.png'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <img className="logo" src={Logo} alt="das bier haus logo with stein"></img>
        </div>
    )
}
