import React from 'react'
import './Navbar.css'
export const Navbar = () => {
    return (
        <div style={{ position: 'sticky', top: '0' }}>
            <div className="navbar-sections">
                <section>Write Story</section>
                <section>My Stories</section>
                <section>Dashboard</section>
                <section>Logout</section>
            </div>
        </div>
    )
}
