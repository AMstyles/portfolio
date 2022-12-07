import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">
                    <span className="material-icons">
                        home
                    </span>
                </a></li>

                <li><a href="#socialmedia"><span className="material-icons"  >
                    person
                </span>
                </a></li>

                <li><a href="#services"><span className="material-icons">
                    business
                </span>
                </a></li>

                <li><a href="#"><span className="material-icons">
                    contact_mail
                </span>
                </a></li>
            </ul>
        </nav>
    )
}

export default NavBar

