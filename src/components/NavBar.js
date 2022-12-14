import React from "react";
import "./NavBar.scss";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">
                    <span className="material-icons">
                        HOME
                    </span>
                </a></li>
                <li><a href="#socialmedia"><span className="material-icons"  >
                    TOOLS
                </span>
                </a></li>
                <li><a href="#services"><span className="material-icons">
                    SERVICES
                </span>
                </a></li>
                <li><a href="#fun"><span className="material-icons">
                    FUN
                </span>
                </a></li>
                <li><a href="#contact"><span className="material-icons">
                    CONTACT
                </span>
                </a></li>
            </ul>
        </nav>
    )
}

export default NavBar

