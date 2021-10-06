import React from 'react'
import './Navbar.css'
import { logout } from '../Firebase/config'
import { useHistory, Link } from "react-router-dom";

export const Navbar = () => {
    const history = useHistory();


    const userLogout = () => {
        console.log("came")
        logout().then(() => {
            history.push("/login");
        })
    }

    return (
        <div>
            <div className="navbar-sections">
                <section onClick={() => { history.push("/write-story") }}>Write Story</section>
                <section >
                    <Link style={{ textDecoration: 'none', color : 'black' }} to="/">Dashboard</Link>
                </section>
                <section onClick={() => { userLogout() }}>Logout</section>
            </div>
        </div>
    )
}

// Name, Title, Story , Post(button)
// story => id () 