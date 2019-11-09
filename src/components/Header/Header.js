import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
        return (
            <div>
            <header>
                <h1> <Link to="/">HOUSER</Link></h1>
            <nav>
           
            <vl>                                         </vl>
            <Link to="/wiz">Make a House!</Link>
            </nav>
            </header>
            </div>)
    }
export default Header
