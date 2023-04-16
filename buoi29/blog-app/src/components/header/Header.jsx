import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <Link to="/">Blogs</Link>
                </div>
                <ul id="menu">
                    <li>
                        <Link to="/search"><span>Search</span></Link>
                    </li>
                    <li>
                        <Link to="/categories"><span>Categories</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header