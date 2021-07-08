import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        // these are essentially each link to different pages of your application
        // this is the react routing bc each of these links is a route to a different page  
        // the "/" is the Home page, meaning that this link renders the Home page of the app
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Kandy Korner</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
        </ul>
    )
}